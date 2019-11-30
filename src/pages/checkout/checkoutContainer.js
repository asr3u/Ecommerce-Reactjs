import { connect } from 'react-redux'
import Checkout from './Checkout'
import {getCheckoutUrl, getPaypalUrl} from '../../redux/action/checkoutAction'
import {getCartByUserId} from '../../redux/action/cartAction'
import {postXSSFlag} from '../../redux/action/flagAction'

const mapStoreToProps = state => ({
  cart:state.cart.cart,
  url:state.checkout.approval_url,
  name:state.token.user_token.user_name
})
const mapDispatchToProps = dispatch => ({
  getCheckoutUrl:(cartId)=>dispatch(getCheckoutUrl(cartId)),
  getCartByUserId:()=>dispatch(getCartByUserId()),
  postXSSFlag
})

export default connect(mapStoreToProps, mapDispatchToProps)(Checkout)
