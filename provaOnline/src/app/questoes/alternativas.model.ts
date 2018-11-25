export class Alternativas {
  private _id_alternativa: number;
  private _id_questao: number;
  private _ds_alternativa: String;
  private _alternativa_resposta: boolean;

  get id_alternativa(): number {
      return this._id_alternativa;
  }
  set id_alternativa(p : number) {
      this._id_alternativa = p;
  }

  get id_questao(): number {
      return this._id_questao;
  }
  set id_questao(p : number) {
      this._id_questao = p;
  }
  get ds_alternativa(): String {
      return this._ds_alternativa;
  }
  set ds_alternativa(p : String) {
      this._ds_alternativa = p;
  }
  get alternativa_resposta(): boolean {
      return this._alternativa_resposta;
  }
  set alternativa_resposta(p : boolean) {
      this._alternativa_resposta = p;
  }
}
