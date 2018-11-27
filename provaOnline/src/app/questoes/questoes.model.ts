import { Alternativas } from './alternativas.model';

export class Questoes {
  private _id_questoes: number;
  private _enunciado: String;
  private _curso: String;
  private _nivel: number;
  private _alternativas: Alternativas[];

  get id_questoes(): number {
      return this._id_questoes;
  }
  set id_questoes(p: number) {
      this._id_questoes = p;
  }
  get enunciado(): String {
      return this._enunciado;
  }
  set enunciado(p: String) {
      this._enunciado = p;
  }
  get curso(): String {
      return this._curso;
  }
  set curso(p: String) {
      this._curso = p;
  }
  get nivel(): number {
      return this._nivel;
  }
  set nivel(p: number) {
      this._nivel = p;
  }
  get alternativas(): Alternativas[] {
      return this._alternativas;
  }
  set alternativas(p: Alternativas[]) {
      this._alternativas = p;
  }
}
