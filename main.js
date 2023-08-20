function ValidaCPF(cpf) {
  this.cpf = cpf;
  this.cpfnovo = this.PassarParaNumero();
}

ValidaCPF.prototype.PassarParaNumero = function() {
  return this.cpf.replace(/\D+/g, '');
};

ValidaCPF.prototype.VerSeTemOnze = function() {
  if (this.cpfnovo.length !== 11) return false; 
  return true;
};

ValidaCPF.prototype.vetor = function() {
  const vetor = Array.from(this.cpfnovo);
  return vetor;
};

ValidaCPF.prototype.n1 = function(){
  const v = [10, 9, 8, 7, 6, 5, 4, 3, 2];
  const vetor = this.vetor();
  let acumulador = 0;
  
  for (let i = 0; i < 9; i++) {
    acumulador = acumulador + (vetor[i] * v[i]);
  }
  
  let divisao = 11 - (acumulador % 11);
  if (divisao > 9) {
    divisao = 0;
  }
  
  return vetor[9] == divisao;
};

ValidaCPF.prototype.n2 = function(){
  const v = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
  const vetor = this.vetor();
  let acumulador = 0;

  for (let i = 0; i < 10; i++) {
    acumulador = acumulador + (vetor[i] * v[i]);
  }

  let divisao = 11 - (acumulador % 11);
  if (divisao > 9) {
    divisao = 0;
  }

  return vetor[10] == divisao;
};

const cpf = new ValidaCPF('cpfaqui');

const d1 = cpf.n1();
const d2 = cpf.n2();

if (!cpf.VerSeTemOnze()) {
  console.log('O CPF não tem 11 dígitos');
} else {
  if (d1 && d2) {
    console.log('CPF válido!');
  } else {
    console.log('CPF inválido!');
  }
}