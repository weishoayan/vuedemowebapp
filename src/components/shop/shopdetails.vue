<template>

    <div class="mb ">
        <head-nav title="商品详情"></head-nav>
        <div class="shopdedatils" v-if="newsDetails">
            <img :src="newsDetails.imgUrl" width="80%" >
            <h3 v-text="newsDetails.des"></h3>
            <p class="money">
                <span class="symbol" v-text="newsDetails.symbol"></span>
                <span class="price" v-text="newsDetails.price"></span>
            </p>
            <p class="courier">快递：包邮 <span class="fr" v-text="newsDetails.alreadyPaid"></span></p>
            <div class="buyNum clearFix">
                <p class="fl buyfont">购买数量</p>
                <p class="addNum fr">
                    <a href="javascript:;" class="reduce" @click="shopReduce">-</a>
                    <a href="javascript:;" class="num">{{num}}</a>
                    <a href="javascript:;" class="add" @click="shopAdd">+</a>
                </p>
            </div>
            <div class="buy">
                <a href="javascript:;" class="addCart" @click="addCart">加入购物车</a>
                <router-link :to="{name:'shopcart',query:{title:'likeYou'}}" class="nowBuy" @click="nowBuy">立即购买</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import connect from '../common/connect'
    import shopTools from '../common/shopTools'
    export default {
        data() {
            return {
                newsDetails:{},
                num:0,
                index:0
            }
        },
        computed:{
            cartCount(){
                //return this.$store.state.num
            }
        },
        created(){
            let title = this.$route.query.title
            let id = this.$route.query.id
            console.log(title,id)
            this.$ajax.get(this.dataURL('vue.php',title,id))
                .then(res=>{
                    // res.data['id'] = index
                    // console.log(res.data['id'])
                    this.newsDetails = res.data
                })
        },
        methods:{
            addCart(){ //加入购物车
                connect.$emit('addCart',this.num)
                shopTools.addUpdate({
                    id:this.newsDetails.id,
                    num:this.num
                })
            },
            nowBuy(){ //立即购买

            },
            shopReduce(){ //  减一
                if (this.num <= 0) return
                this.num--
            },
            shopAdd(){ // 加一
                if (this.num >= 20) return
                this.num++
            }
        }
    }
</script>

<style scoped lang="less">
    @rem:750/10rem;
    .mb{
        margin-bottom: 130/@rem;
    }
    .shopdedatils{
        padding: 22/@rem;
        position: relative;
        text-align: left;
        background: white;
        img{
            display: block;
            margin: auto;
        }
        h3{
            font-size: 33/@rem;
        }
        .money{
            color: red;
            .symbol{
                font-size: 22/@rem;
            }
            .price{
                font-size: 32/@rem;
            }
        }
        .courier{
            font-size: 25/@rem;
            color: #999;
        }
        .buyNum{
            border: 1px solid #e7e7e7;
            border-left: none;
            border-right: none;

            padding: 20/@rem;
            .buyfont{
                font-size: 40/@rem;
            }
            .addNum{
                font-size: 40/@rem;
                a{
                    width: 60/@rem;
                    height: 60/@rem;
                    background: #f1f1f1;
                    display: inline-block;
                    color: #878787;
                    text-align: center;
                }
                a:active{
                    background: #ddd;
                }
            }
        }
        .buy{
            display: flex;
            height: 96/@rem;
            text-align: center;
            line-height: 96/@rem;
            a{
                flex: 1;
                color: white;
                font-size: 31/@rem;
            }
            .addCart{
                background: #ff9402;
            }
            .nowBuy{
                background: #ff5000;
            }
        }
    }
</style>
