redux提供了一个独立的store，但是它并不是完全为了react定做的，要想在react中使用redux，需要自己写store.getstate,subscribe...，所以，为了能将redux完全应用到react而减少我们的代码，就有了react-redux

### Provider
<pre>
// Provider是这么用的，所以它是个react组件，有个prop是store
    <Provider store={store}>
        <Route />
        </Provider>
/***/
export const subscriptionShape = PropTypes.shape({
  trySubscribe: PropTypes.func.isRequired,
  tryUnsubscribe: PropTypes.func.isRequired,
  notifyNestedSubs: PropTypes.func.isRequired,
  isSubscribed: PropTypes.func.isRequired,
})

export const storeShape = PropTypes.shape({
  subscribe: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired
})

let didWarnAboutReceivingStore = false
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return
  }
  didWarnAboutReceivingStore = true

  warning(
    '<Provider> does not support changing `store` on the fly. ' +
    'It is most likely that you see this error because you updated to ' +
    'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' +
    'automatically. See https://github.com/reactjs/react-redux/releases/' +
    'tag/v2.0.0 for the migration instructions.'
  )
}
////
有一个在react中组件跨层级传递状态的办法，就是使用context，比如说有个顶层组件<List/>，这个组件中有个<ListItem/>,而这个里面又有个<Button/>，这个组件里面想要使用最顶层List中的state，
比如说叫color，传统的方法只能是通过props来进行一级级的传递，使用context就不一样了。要用它，先在List组件中声明一个List.childContextTypes={color: React.PropTypes.string}，然后要在
List中写一个方法,getChildContext(){return color: 'red'}，在顶层组件做的事就行了，然后在最底层的Button组件里面要用它，Button.contextTypes = {color: React.PropTypes.string}，这样声明
完成后，Button组件里就可以通过this.context.color来使用这个color。

export default class Provider extends Component {
  getChildContext() {
    return { store: this.store, storeSubscription: null }
  }

  constructor(props, context) {
    super(props, context)
    this.store = props.store
  }

  render() {
      //表示this.props.children只能是一个大的组件，也就是一个根结点
    return Children.only(this.props.children)
  }
}

if (process.env.NODE_ENV !== 'production') {
    // 这里来判断，组件挂载后可以对store中的state进行修改，但是不能直接改变store这个对象本身。
  Provider.prototype.componentWillReceiveProps = function (nextProps) {
    const { store } = this
    const { store: nextStore } = nextProps

    if (store !== nextStore) {
      warnAboutReceivingStore()
    }
  }
}

Provider.propTypes = {
  store: storeShape.isRequired,
  children: PropTypes.element.isRequired
}
Provider.childContextTypes = {
  store: storeShape.isRequired,
  storeSubscription: subscriptionShape
}
Provider.displayName = 'Provider'
</pre>