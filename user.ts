export class User {


    id!: number
    FirstName!: string;
    Lastname!: string;
    Email!: string;
    Mobile_no!: String;
    Sallary!: number;

    constructor(id: number, FirstName: string, Lastname: string, Email: string, Mobile_no: String, Sallary: number) {
        this.id = id;
        this.FirstName = FirstName;
        this.Lastname = Lastname;
        this.Email = Email;
        this.Mobile_no = Mobile_no;
        this.Sallary = Sallary;
    }

}