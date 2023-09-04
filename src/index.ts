import { accessOptions, userType } from "./models";

let content = document.getElementById('content') as HTMLInputElement;
const button = <HTMLInputElement>document.querySelector('button[id="add"]');
const accessRadio = <HTMLElement>document.getElementById('accessRadio');
button.addEventListener('click', addEmployee);

const accessOptionsValues = Object.values(accessOptions)

const getUser = async (): Promise<userType[]> => {
  const response: Response = await fetch('http://localhost:5011/users');
  const users: userType[] = await response.json();
  return users;
};

const updateUserLayout = async (): Promise<void> => {
  const users: userType[] = await getUser();

  users.map((user: userType) => {
    content.innerHTML += <string>createLine(user);
  });
};

updateUserLayout()

function addEmployee (): void {
  let fullName: HTMLInputElement | null = document.querySelector('#fullName');
  let register = <HTMLInputElement>document.querySelector('#register');
  let admin = document.querySelector('input[name="access"]:checked') as HTMLInputElement;
  let active = document.querySelector('#active') as HTMLInputElement;

  let user: userType = {
    fullName: fullName!.value,
    register: register.value,
    access: <accessOptions>admin.value,
    active: active.checked
  }

  content.innerHTML += <string>(
    createLine(user)
  );
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
})

function createLine(user: userType): string {
  return `
    <div class="card mb-1">
      <div class="card-header">
        ${user.register}
      </div>
      <div class="card-body">
        <h5 class="card-title">${user.fullName}</h5>
        <a href="#" class="btn btn-primary">${user.active ? 'Ativo' : 'Inativo'}</a>
      </div>
      <div class="card-footer bg-transparent border-success">
        Acesso: ${user.access}
      </div>
    </div>`;
}