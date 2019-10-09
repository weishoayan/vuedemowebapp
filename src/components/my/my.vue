<template>
    <div class="mb">
        <head-nav title="我的信息"></head-nav>
        <div  id='write'  class = 'is-node'>
            <p>	   我的信息</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }
</script>

<style scoped lang="less">
    @rem:750/10rem;
    .mb{
        margin-bottom: 130/@rem;

    }
    #write{
        background-color: #15131E;
        p{
            font-size: 30/@rem;
            color: rgba(128,118,212,1);
        }
    }
</style>
