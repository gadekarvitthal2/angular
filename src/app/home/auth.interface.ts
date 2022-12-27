export class UserData {
  constructor (public email:string
    ,public localId:string,
    private _Token:string,
    private expirationData?:Date)
   {}
}
