export class NivelQuestao {
  private _num_nivel: number;
  private _nivel: string;

  get num_nivel(): number {
      return this._num_nivel;
  }
  set num_nivel(p: number) {
      this._num_nivel = p;
  }
  get nivel(): string {
      return this._nivel;
  }
  set nivel(p: string) {
      this._nivel = p;
  }
}
