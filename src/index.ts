import { accessOptions, IUser } from "./models";

let content = document.getElementById('content') as HTMLInputElement;
const button = <HTMLInputElement>document.querySelector('button[id="add"]');
const accessRadio = <HTMLElement>document.getElementById('accessRadio');
button.addEventListener('click', addEmployee);

const accessOptionsValues = Object.values(accessOptions)

const getUser = async (): Promise<IUser[]> => {
  const response: Response = await fetch('http://localhost:5011/users');
  const users: IUser[] = await response.json();
  return users;
};

const updateUserLayout = async (): Promise<void> => {
  const users: IUser[] = await getUser();

  users.map((user: IUser) => {
    content.innerHTML += <string>createLine(user);
  });
};

updateUserLayout()

function addEmployee (): void {
  let formFields = [
    <HTMLInputElement>document.querySelector('#fullName'),
    <HTMLInputElement>document.querySelector('#register'),
    document.querySelector('input[name="access"]:checked') as HTMLInputElement,
    document.querySelector('#active') as HTMLInputElement,
    document.querySelector('#addressHome') as HTMLInputElement,
    document.querySelector('#addressWork') as HTMLInputElement,
  ];

  const [fullName, register, admin, active, addressHome, addressWork] = formFields;

  let user: IUser = {
    fullName: fullName!.value,
    register: register.value != '' ? register.value : undefined,
    active: active.checked,
    access: <accessOptions>admin.value,
  };

  content.innerHTML += <string>createLine(user, addressHome.value, addressWork.value);
}

accessOptionsValues.forEach((value: string, i: number) => {
  accessRadio.innerHTML += `
  <div class="form-check">
    <input class="form-check-input" type="radio" name="access" id="accessRadio${i}" value="${value}">
    <label class="form-check-label capitalLetter" for="no">
      ${value}
    </label>
  </div>
  `
});
(<HTMLInputElement>document.getElementById('accessRadio0')).checked = true;

function createLine(
  {
    fullName,
    register = Math.random().toString(36).substring(7).toUpperCase(),
    active = false,
    access = accessOptions.undefined,
  }: IUser,
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