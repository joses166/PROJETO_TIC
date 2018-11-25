export class Questoes {
  private _id_questoes: number;
  private _enunciado: String;
  private _curso: String;
  private _nivel: number;
  private _alternativas: Alternativas[];

  get id_questoes(): number {
      return this._id_questoes;
  }
  set id_questoes(p : number) {
      this._id_questoes = p;
  }
  get enunciado(): string {
      return this._enunciado;
  }
  set enunciado(p : string) {
      this._enunciado = p;
  }
  get curso(): number {
      return this._curso;
  }
  set curso(p : number) {
      this._curso = p;
  }
  get nivel(): number {
      return this._nivel;
  }
  set nivel(p : number) {
      this._nivel = p;
  }
  get alternativas(): Alternativas[] {
      return this._alternativas;
  }
  set alternativas(p : Aternativas[]) {
      this._alternativas = p;
  }
}
