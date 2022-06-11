import { useCaseAuth } from '../../../../../core/Authorization/useCaseAuth'
import { AuthUseAdapterInterface } from '../../../../bll/auth/useAdapter'
import { pageTask } from '../../../../types/pageTask'
import '../style/login.css'
import { LoginActions } from './loginActions'

export class LoginPage implements pageTask {
  loginActions: LoginActions
  constructor(private authUseAdapter: AuthUseAdapterInterface) {
    this.loginActions = new LoginActions(authUseAdapter)
  }
  public style: string = 'login.css'
  toHTML(): HTMLElement {
    const div = document.createElement('div')
    div.innerHTML = `
    <div class="login container">
    <div class="wrapper fadeInDown">
  <div id="formContent">
   
    <div class="fadeIn first">
      <img src="https://www.icmetl.org/wp-content/uploads/2020/11/user-icon-human-person-sign-vector-10206693.png" id="icon" alt="User Icon" />
    </div>
   
     
    <div class="messages"></div>

    <form class="form-login">
      <input type="text" id="login" class="fadeIn login second" name="login" placeholder="login">
      <input type="text"  id="password" class="fadeIn login third" name="password" placeholder="password">
      <input type="submit" class="fadeIn fourth btn-login" value="Log In">
    </form>
     

    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>

  </div>
</div>
      </div>
    `
    this.loginActions.login(div, '.btn-login')

    return div
  }
}
