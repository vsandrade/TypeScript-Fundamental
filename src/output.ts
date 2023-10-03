import { accessOptions, User } from "./models";
import { IService, UserService } from "./service/service";

class UserController {
  //propriedades
  content: HTMLElement = this.getElement('#content');
  accessRadio: HTMLElement = this.getElement('#accessRadio');
  accessOptionsValues = Object.values(accessOptions);
  button: HTMLFormElement = this.getFormElement('#insert');

  //construtor
  constructor() {
    this.button.addEventListener('click', () => this.addEmployee());
    this.userLayout()
  }

  private getElement(selector: string): HTMLElement {
    return document.querySelector(selector) as HTMLElement
  }

  private getFormElement(selector: string): HTMLFormElement {
    return document.querySelector(selector) as HTMLFormElement
  }

  //funcionalidades
  async userLayout(): Promise<void> {
    const service: IService<User> = new UserService<User>();
    const users = await service.getItems();

    users.map((user: User) => {
      this.content.innerHTML += <string>this.createLine(user);
    });

    this.accessOptionsValues.forEach((value: string, i: number) => {
      this.accessRadio.innerHTML += `
      <div class="form-check">
        <input class="form-check-input" type="radio" name="access" id="accessRadio${i}" value="${value}">
        <label class="form-check-label capitalLetter" for="no">
          ${value}
        </label>
      </div>
      `;
    });
    (this.getFormElement('#accessRadio0')).checked = true;
  };

  addEmployee (): void {
    let formFields = [
      this.getFormElement('#fullName'),
      this.getFormElement('#register'),
      this.getFormElement('input[name="access"]:checked'),
      this.getFormElement('#active'),
      this.getFormElement('#addressHome'),
      this.getFormElement('#addressWork'),
    ];
  
    const [fullName, register, admin, active, addressHome, addressWork] = formFields;
  
    let user: User = {
      fullName: fullName!.value,
      register: register.value != '' ? register.value : undefined,
      active: active.checked,
      access: <accessOptions>admin.value,
    };
  
    this.content.innerHTML += <string>this.createLine(user, addressHome.value, addressWork.value);
  }

  createLine(
    {
      fullName,
      register = Math.random().toString(36).substring(7).toUpperCase(),
      active = false,
      access = accessOptions.undefined,
    }: User,
    ...address: string[]
  ): string {
    return `
      <div class="card mb-1">
        <div class="card-header">
          ${register}
        </div>
        <div class="card-body">
          <h5 class="card-title">${fullName}</h5>
          <a href="#" class="btn btn-primary">${active ? 'Ativo' : 'Inativo'}</a>
        </div>
        ${
          address.length > 0
            ? `<div class="card-body">
            <h6 class="card-title">${address.join('<br/>')}</h6>
          </div>`
            : ''
        }
        <div class="card-footer bg-transparent border-success">
          Acesso: ${access}
        </div>
      </div>`;
  }
}

export default new UserController;