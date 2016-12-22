
var AGG = function () { };

AGG.prototype = {
    init: function () {
        $('.container').css('top', window.innerHeight * 0.8);
        return this;
    },
    index: function () {
        $('#header').css('height', window.innerHeight);
        //首页闪烁效果
        var Ran = 1;
        setInterval(function () {
            Ran = parseInt(Math.random() * 6) + 1;
            $('.proJ-item:nth-child(' + Ran + ')').siblings().find('.animal').hide();
            $('.proJ-item:nth-child(' + Ran + ')').find('.animal').show();
        }, 2000)
        $('.proJ-item:nth-child(3)').find('.animal').show();
        return this;
    },
    server: function(){
        var List = [{
            img: './images/server_1.png',
            name: '软件技术外包',
            intro: 'O2O（全 平台），商城（全平台），社区配送 （全平台），微信开发，校园教育校讯通，学校课件平台，硬件设计研发，视频远程监控、移动执法，公共安全通信监控（限公安司法部门），金融交易系统，社交APP开发，智能设备APP开发'
        },{
            img: './images/server_2.png',
            name: '微信、app开发、应用市场',
            intro: '集成市面上最火最流行的各种软件小应用、营销工具，帮助任何中小型企业、商铺达成宣传营销的目的'
        },{
            img: './images/server_3.png',
            name: '设计服务',
            intro: '提供互联网行业及互联网相关领域，平面、UI等相关方面的专业意见，帮助雇主达到宣传、制作、规划等设计内容的服务'
        },{
            img: './images/server_4.png',
            name: '智能硬件服务',
            intro: '作为国内多家智能硬件厂商的合作平台，满足雇主针对智能硬件项目开发的支持'
        },{
            img: './images/server_5.png',
            name: '运营策划、咨询顾问服务',
            intro: '提供互联网及互联网相关领域（电子商务、社交网络、移动互联网、大数据等领域），如行业现状及发展趋势、商业模式与运营模式、战略及年度发展规划、网络营销及策划等内容的咨询服务'
        },{
            img: './images/server_6.png',
            name: '同城配送、供应链Saas平台',
            intro: '提供供应链B2B供货商、采购商、物流直达配送无缝连接的商业闭环'
        }];
        function Tmpl(list){
            var tmpl =
            "<li>"+
            "<div class='cont-main-left'>"+
            "<img src= "+ list.img +" alt=''>"+
            "</div>"+
            "<div class='cont-main-right'>"+
            "<div class='name'>"+ list.name +"</div>"+
            "<div class='intro'>"+ list.intro +"</div>"+
            "</div>"+
            "</li>";
            return tmpl;
        }
        var TmplHtml ='';
        for (var i =0; i<List.length; i++){
            TmplHtml += Tmpl(List[i])
        }
        $('#contMain').html(TmplHtml);
        return this;
    },
    map: function(){
       function init(API){
            var map = new AMap.Map('container', {
                resizeEnable: true,
                zoom:12,
                center: API
            });
            AMap.plugin(['AMap.ToolBar','AMap.Scale'],
                function(){
                    map.addControl(new AMap.ToolBar());
            
                    map.addControl(new AMap.Scale());
            });
            var marker = new AMap.Marker({
                position: API
            });
            marker.setMap(map);
            var circle = new AMap.Circle({
                center: API,
                radius: 100,
                fillOpacity:0.2,
                strokeWeight:1
            })
            circle.setMap(map);
        }
        var API_list = [[117.211066,31.83241],[120.537809,31.27565],[120.672527,31.298966]]
        $(document).ready(function(){
            $('.map').click(function(){
                $('#zzc').fadeIn(500);
                var _num = $(this).attr('data-id');
                init(API_list[_num]);
            })
            $('#close').click(function(){
                $('#zzc').hide();
            })
        })
    }
}
