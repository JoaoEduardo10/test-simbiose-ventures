export interface IDeletePersonRepository {
  delete(params: { id: string }): Promise<unknown>;
}
