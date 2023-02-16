/* eslint-disable no-unused-vars */
import AbstractCouponHandler from '../AbstractCouponHandler'
import IUser from 'src/Components/User/model/IUser'
import ICuopon from '../../../../Components/Cuopon/model/ICuopon';


class ExpireHandler extends AbstractCouponHandler {
  public process (coupon: ICuopon, user: IUser): ICuopon | null {
    const now = new Date()
    if (now > coupon.expires_at) {
      throw new Error('مدت زمان استفاده از این کد تخفیف به پایان رسیده است')
    }
    return super.process(coupon, user)
  }
}
export default ExpireHandler
