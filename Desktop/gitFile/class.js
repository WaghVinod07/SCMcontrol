class User{
    constructor(email,password){
        this.email=email
        this.password=password

        console.log(this._email)
    }

    get email(){
        console.log(this.email)
    }
    set email(value){
        this._email=value
    }
}


let user = new User(123,125)
user.email()
