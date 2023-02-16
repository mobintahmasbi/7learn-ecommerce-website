/* eslint-disable no-unused-vars */
import AbstractCouponHandler from '../AbstractCouponHandler'
import IUser from 'src/Components/User/model/IUser'
import ICuopon from '../../../../Components/Cuopon/model/ICuopon';

class LimitHandler extends AbstractCouponHandler {
  public process (coupon: ICuopon, user?: IUser): ICuopon | null {
    if (coupon.used >= coupon.limit) {
      throw new Error('تعداد استفاده از این کد تخفیف به پایان رسیده است')
    }
    return super.process(coupon, user)
  }
}
export default LimitHandler
