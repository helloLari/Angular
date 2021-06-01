interface UserProps {
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    cpf: string,
    contact: string,
    isAdmin: boolean
}

class User implements UserProps {
    firstName: string = '';
    lastName: string = '';
    username: string = '';
    email: string = '';
    password: string = '';
    cpf: string = '';
    contact: string = '';
    isAdmin: boolean = false;
    
    constructor(
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string,
    cpf: string,
    contact: string,
    isAdmin: boolean
    ) {
    this.firstName = firstName
    this.lastName = lastName
    this.username = username
    this.email = email
    this.password = password
    this.cpf = cpf
    this.contact = contact
    this.isAdmin = isAdmin
    }

    getFirstName(): string {
    return this.firstName
    }

    setFirstName(firstName: string): void {
    this.firstName = firstName
    }

    getLastName(): string {
    return this.lastName
    }

    setLastName(lastName: string): void {
    this.lastName = lastName
    }

    getUsername(): string {
    return this.username
    }

    setUsername(username: string): void {
    this.username = username
    }

    getEmail(): string {
    return this.email
    }

    setEmail(email: string): void {
    this.email = email
    }

    getPassword(): string {
    return this.password
    }

    setPassword(password: string): void {
    this.password = password
    }

    getCpf(): string {
    return this.cpf
    }

    setCpf(cpf: string): void {
    this.cpf = cpf
    }

    getContact(): string {
    return this.contact
    }

    setContact(contact: string): void {
    this.contact = contact
    }

    getIsAdmin(): boolean {
    return this.isAdmin
    }

    setIsAdmin(isAdmin: boolean) {
    this.isAdmin = isAdmin
    }

    toString(): string {
    return JSON.stringify(this)
    }
}

const user = new User('Larisse', 'Rodrigues', 'helloLari', 'larisse1991@gmail.com', '135209', '11061269639', '99989-7380', true)
console.log(user.toString())