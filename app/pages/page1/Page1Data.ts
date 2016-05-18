let messages;
let slides = [];
let education;
let basemessages;
messages = {
    provinces: ['北京', '天津', '福建'],
    cities: ['福州', '厦门', '泉州'],
    branches: ['台江支行营业厅----台江区下杭路52号',
    '仓山支行营业厅----仓山区六一南路121号',
    '鼓楼支行营业厅----鼓楼区五四路157号'],
};

var cards = [
{
    image: "http://www.abchina.com/abcpic/xyk/km/201404/W020140421333679796367.jpg",
    name: "漂亮妈妈卡"
},
{
    image: "http://www.abchina.com/abcpic/xyk/km/201312/W020131218510647857407.jpg",
    name: "环球商旅信用卡"
},
{
    image: "http://www.abchina.com/abcpic/xyk/km/201301/W020130130378043825591.jpg",
    name: "金穗悠游世界信用卡"
},
{
    image: "http://www.abchina.com/abcpic/xyk/km/201312/W020131210455007525321.jpg",
    name: "安邦车主信用卡"
},
{
    image: "http://www.abchina.com/abcpic/xyk/km/201403/W020140325348028610207.jpg"
    , name: "吉祥航空联名IC信用卡"
},
{
    image: "http://www.abchina.com/abcpic/xyk/km/201108/W020110830362258428302.jpg",
    name: "金穗汉庭东方万里行信用卡金卡"
},
{
    image: "http://www.abchina.com/abcpic/xyk/km/201108/W020110830362631538389.jpg",
    name: "金穗汉庭东方万里行信用卡普卡"
},

{
    image: "http://www.abchina.com/abcpic/xyk/km/201309/W020130905308480919022.jpg",
    name: "喜羊羊与灰太狼联名卡"
}
];
cards.forEach(function callback(element, index) {
    slides.push({
        image: element.image,
        id: index,
        name: element.name
    });
});
export var Page1Data = {
    messagesOrder: messages,
    slidesOrder: slides,
};