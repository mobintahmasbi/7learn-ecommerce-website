/* eslint-disable no-unused-vars */
import AbstractCouponHandler from '../AbstractCouponHandler'
import IUser from 'src/Components/User/model/IUser'
import ICuopon from '../../../../Components/Cuopon/model/ICuopon';

class UserHandler extends AbstractCouponHandler {
  public process (coupon: ICuopon, user?: IUser): ICuopon | null {
    // const { users } = coupon.constraints
    if (coupon.constraints && 'users' in coupon.constraints) {
      const { users } = coupon.constraints
      if (user && users && users.length > 0 && !users.includes(user.id)) {
        throw new Error('این کد تخفیف برای کاربری شما صادر نشده است')
      }
    }
    return super.process(coupon, user)
  }
}
export default UserHandler
