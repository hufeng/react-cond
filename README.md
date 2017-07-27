# react-cond
react condition container

# Why?
还在为在react中不能很好的表达展示逻辑而苦恼吗？
本质原因是因为JSX就是要让计算能力受限，逼着我们不在render中做大量的运算
保持render的简单可预测。但是实际的场景中，我们是有这方面的需求。

```javascript
class Hello extends React.Component {
  render() {
    return (
      <div>
      {/*简单的逻辑表达尚可*/}
       {loading ? <Loading/> : <Other>} 

       {/*
       复杂的业务逻辑，我们已经需要跳转上下文了 
       或者通过容器组件 拆成更小粒度的组件了
       */}
       {this._renderXX() }
      </div>
    )
  }

  _renderXX() {
    if (a) {
      //...
    } else if(b) {
      //..
    } else {
      //...
    }
  }
}
```

### 怎么办？
我们看普通的逻辑statement(javascript/java)命令式风格
```javascript
//statement => 命令式风格
if (a) {
  return xx
} else {
  return yyy
}
```

```clojure
;;再来看看我大clojure
;; when 或者 cond是表达式(expression)(声明式特点)
;;expression可以有返回值
(when something
  (something-else))

(when result
    (do-something-with result)
    (do-something-more-with result))

(cond
  (< n 0) "negative"
  (> n 0) "positive"
  :else "zero"))
```

# 怎么在React中声明式的表达逻辑判断？

答案就是容器模式

容器模式在函数式中很有特点，而且非常强大，函数的能力在容器中得到了升华。

容器决定了函数的行为和能力。

来来来，Talk is cheap!!!

```javascript
/*
  When容器
  test判断条件成立，就展示第一个组件
  相反就展示第二个组件
  是不是有if-else的感觉
  */
const HelloWhen = () => 
  <When test={loading}>
    <Loading/> 
    <Hello/>
  </When>

/**
 * 条件成立，加载GoodsList 
 */
const GoodsList = () =>
  <When test={goodsList.isNotEmpty()}>
    <GoodsList/>
  </When>

const UserProfile = () => 
  <When test={platform == 'ios'}>
    <IOsUserProfile/>
    <AndroidUserProfile>
  </When>
```

```javascript
/**
 * Cond Container
 * 多重判断条件-react版本switch-case
 */

const ConcatInfo = ({t}) => 
  <Cond>
    <Case test={t == 'qq'} component={<QQ/>}>
    <Case test={t == 'weichat'} component={<Wechat/>}>
    <Case test={t == 'Facebook'} component={<Facebook/>}>
    <Case test={t == 'Github'} component={<Github/>}>
    <Default component={<Guest/>}> 
  </Cond>

const UserProfile = () => 
  <Cond>
    <Case test={isIOS} component={UserProfile}>
    <Case test={isAndroid} component={AndroidUserProfile}>
  </Cond>
  
```

