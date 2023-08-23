const button = <HTMLInputElement>document.querySelector('button[id="add"]');
const accessRadio = <HTMLElement>document.getElementById('accessRadio');
button.addEventListener('click', addEmployee);

enum accessOptions {
  administrator = "administrador",
  manager = "gerente",
  employee = "funcionário"
}

const accessOptionsValues = Object.values(accessOptions)

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

//Declaration
function addManager(): void {

}

//Anonymous Function Expression
const addAdmin = function (): string {
  return "";
}

//Arrow Function Expression
const addMaster = (): never => {
  while(true) {

  } 
}

function addEmployee (): void {
  let content = document.getElementById('content') as HTMLInputElement;
  let fullName: HTMLInputElement | null = document.querySelector('#fullName');
  let register = <HTMLInputElement>document.querySelector('#register');
  let admin = document.querySelector('input[name="access"]:checked') as HTMLInputElement;
  let active = document.querySelector('#active') as HTMLInputElement;

  content.innerHTML += <string>(
    createLine(fullName!.value, register.value, admin.value, active.checked)
  );
}

function createLine(fullName: string, 
                    NrRegister: string | number, 
                    admin: string, 
                    active: boolean): string {
  return `
    <div class="card mb-1">
      <div class="card-header">
        ${NrRegister}
      </div>
      <div class="card-body">
        <h5 class="card-title">${fullName}</h5>
        <a href="#" class="btn btn-primary">${active ? 'Ativo' : 'Inativo'}</a>
      </div>
      <div class="card-footer bg-transparent border-success">
        Acesso: ${admin}
      </div>
    </div>`;
}