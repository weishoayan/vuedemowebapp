<template>
    <div class="mb map" id="map">

    </div>
</template>

<script>
    import AMap from 'AMap'
    export default {
        data() {
            return {

            }
        },
        mounted(){
            let lnglatXY = [113.094942,22.590431]; //已知点坐标
            let map = new AMap.Map('map',{
                resizeEnable: true,
                zoom: 12,
                center: lnglatXY,
                //pitch:35,
                //viewMode:'3D',
            });

            let marker = new AMap.Marker({
                position: map.getCenter()
            });
            marker.setMap(map);

        }
    }
</script>

<style scoped lang="less">
    @rem:750/10rem;
    .mb{
        margin-bottom: 130/@rem;
    }
    .map{
        height: 100%;
    }
    .amap-marker-label{
        padding: 10px 20px !important;
        background-color: rgba(255,255,255,0.2) !important;
    }
</style>
