import { fakeUsers } from "./users.stab";

export default class UserService {
  public getUsers() {
    return fakeUsers();
  }
  
  public getUserById(userId: string) {
      const id = parseInt(userId, 10);
      return fakeUsers().filter(user => user.id === id);
  }
  
  public deleteUserById(userId: string) {
    const id = parseInt(userId, 10);
    
    return fakeUsers().filter(user => user.id !== id);
  }
}
