<template>
<movie-bar class="main-movie" id="movie">
 <div slot="title" class="movie-title"><h1></h1>
 </div>
      <div slot="movie-item"  class='movie' data-aos="fade-down" data-aos-delay="175">
      <div class="single-movie-item" >
          <img src="../../assets/img/bandapart.jpg" alt="" @mouseover="firstMouseOver" @mouseout="firstMouseOut">
          <transition name="fade">
          <div class="detials left-item" v-if="firstShow">
          <div class="title" data-aos="fade-right" data-aos-delay="175">法外狂徒</div>
          <div class="info" data-aos="fade-right" data-aos-delay="175">
          <span class="length">95 Min</span>
          <span class="year">(1964)</span>
          </div>
          <div class="desc" data-aos="flip-up" data-aos-delay="200">
           在一个英语学习班上，法国姑娘奥迪尔认识了两名男子阿瑟和弗朗茨，他们是两个着迷于美式文化的年轻人，向往着惊险的传奇故事。奥迪尔很快就被风流的阿瑟吸引，渐渐地爱上他，他们三人开始常常混在一起，坐在敞篷跑车里兜风。
          </div>
          </div>
          </transition>
     </div>
      <div class="single-movie-item">
          <img src="../../assets/img/dafoplus.jpg" alt="" @mouseover="secondMouseOver" @mouseout="secondMouseOut">
      <transition name="fade">
          <div class="detials left-item" v-if="secondShow">
          <div class="title" data-aos="fade-right" data-aos-delay="175">大佛普拉斯</div>
          <div class="info" data-aos="fade-right" data-aos-delay="175">
          <span class="length">102 Min</span>
          <span class="year">(2017)</span>
          </div>
          <div class="desc" data-aos="flip-up" data-aos-delay="200">
            菜埔是一家雕塑厂的夜间保安，家中有一位重病的老母亲需要照顾。肚财是菜埔唯一的朋友，菜埔经常在值夜班的时候把肚财叫过来和他作伴。一天，两人突发奇想决定看一看菜埔的老板黄启文的行车记录仪里记录了哪些影像，希望向来风流的老板能够贡献出一些精彩的片段以解两个独身男人内心里的寂寞之苦。
          </div>
          </div>
          </transition>
      </div>
      <div class="single-movie-item">
          <img src="../../assets/img/drstrangelove.jpg" alt="" @mouseover="thirdMouseOver" @mouseout="thirdMouseOut">
          <transition name="fade" mode="out-in">
          <div class="detials left-item" v-if="thirdShow">
          <div class="title" data-aos="fade-right" data-aos-delay="175">奇爱博士</div>
          <div class="info" data-aos="fade-right" data-aos-delay="175">
          <span class="length">95 Min</span>
          <span class="year">(1964)</span>
          </div>
          <div class="desc" data-aos="flip-up" data-aos-delay="200">
           美国空军将领杰克怀疑苏共的“腐朽思想”正在毒害“正直善良”的美国人民，他于是下令携带核弹头的飞行部队前往苏联，苏联方面得知此事，立即致电美国总统墨尔金，并威胁如若领土遭到攻击，苏联将不惜一切代价按下“世界末日装置”。一场有关全人类乃至整个地球命运的战争就这样悄然且荒诞地拉开了序幕……
          </div>
          </div>
          </transition>
      </div>
      <div class="single-movie-item">
          <img src="../../assets/img/lamontana.jpg" alt="" @mouseover="fourthMouseOver" @mouseout="fourthMouseOut">
           <transition name="fade">
          <div class="detials right-item" v-if="fourthShow">
          <div class="title" data-aos="fade-left" data-aos-delay="175">圣山</div>
          <div class="info" data-aos="fade-left" data-aos-delay="175">
          <span class="length">114 Min</span>
          <span class="year">(1973)</span>
          </div>
          <div class="desc" data-aos="flip-up" data-aos-delay="200">
            一位貌似耶稣的小偷从儿童们的石块击打中醒来，与一个无手无脚的侏儒结伴进入城市。城中正进行一场疯狂的庆典，一些人被杀死，鸟雀从他们的枪口中飞出，大量蟾蜍穿着印第安人以及欧洲殖民者的服装在混战中被炸的粉碎。小偷从几个罗马士兵打扮的人手中接过十字架，又被他们将自身的形象制造成无数模型……
          </div>
          </div>
          </transition>
      </div>
      <div class="single-movie-item">
          <img src="../../assets/img/lostintransition.jpg" alt="" @mouseover="fifthMouseOver" @mouseout="fifthMouseOut">
           <transition name="fade">
          <div class="detials right-item" v-if="fifthShow">
          <div class="title" data-aos="fade-left" data-aos-delay="175">迷失东京</div>
          <div class="info" data-aos="fade-left" data-aos-delay="175">
          <span class="length">102 Min</span>
          <span class="year">(2003)</span>
          </div>
          <div class="desc" data-aos="flip-up" data-aos-delay="200">
              一切源自于无处不在的寂寞。过气明星鲍勃，已为人妻的夏洛特，年轻的电影女演员凯莉在机缘巧合下东京相遇。在这个不是故乡的陌生城市里，他们在豪华旅馆邂逅，不约而同的失眠，互相陪伴，生活一方面仿佛变的缤纷起来，另一面却逐渐走向迷失，过气明星和为人妻的夏洛特能迎接他们二人思想和关系变化的挑战吗？
          </div>
          </div>
          </transition>
          </div>
      <div class="single-movie-item">
          <img src="../../assets/img/mysterytrain.jpg" alt="" @mouseover="sixthMouseOver" @mouseout="sixthMouseOut">
           <transition name="fade">
          <div class="detials left-item" v-if="sixthShow">
          <div class="title" data-aos="fade-right" data-aos-delay="175">神秘列车</div>
          <div class="info" data-aos="fade-right" data-aos-delay="175">
          <span class="length">110 Min</span>
          <span class="year">(1989)</span>
          </div>
          <div class="desc" data-aos="flip-up" data-aos-delay="200">
           美国田纳西州，猫王的故乡孟菲斯，一家廉价破旧的孟菲斯旅馆，三段彼此交错的平行故事，就发生在这家献给猫王埃尔维斯·普雷斯利的旅馆之中。一对日本夫妇的文化朝圣，一夜之间滞留在曼菲斯的意大利寡妇，和一个新单身失业的英国人与他不情愿的同伴
          </div>
          </div>
          </transition>
          </div>
      <div class="single-movie-item">
          <img src="../../assets/img/pulpfiction.jpg" alt="" @mouseover="seventhMouseOver" @mouseout="seventhMouseOut">
           <transition name="fade">
          <div class="detials left-item" v-if="seventhShow">
          <div class="title" data-aos="fade-right" data-aos-delay="175">低俗小说</div>
          <div class="info" data-aos="fade-right" data-aos-delay="175">
          <span class="length">154 Min</span>
          <span class="year">(1994)</span>
          </div>
          <div class="desc" data-aos="flip-up" data-aos-delay="200">
            《低俗小说》由“文森特和马沙的妻子”、“金表”、“邦妮的处境”三个故事以及影片首尾的序幕和尾声五个部分组成。看似独立的小故事里面，却又有环环相扣的人和事。
          </div>
          </div>
          </transition>
          </div>
      <div class="single-movie-item">
          <img src="../../assets/img/rumblefish.jpg" alt="" @mouseover="eighthMouseOver" @mouseout="eighthMouseOut">
           <transition name="fade">
          <div class="detials right-item" v-if="eighthShow">
          <div class="title" data-aos="fade-left" data-aos-delay="175">斗鱼</div>
          <div class="info" data-aos="fade-left" data-aos-delay="175">
          <span class="length">94 Min</span>
          <span class="year">(1983)</span>
          </div>
          <div class="desc" data-aos="flip-up" data-aos-delay="200">
            美国的塔尔萨，17岁的詹姆斯有一个绰号叫“摩托车手”的哥哥。一天，詹姆斯在一家动物商店发现了“摩托车手”，哥哥将一些红、蓝两色的暹罗斗鱼指给弟弟看，并告诉他：这些鱼如果被关在密闭的容器里就会相互厮杀，直至死亡。“摩托车手”要将暹罗斗鱼带到河边去放生，但就在他走到河边的时候，却被警察开枪打死。
          </div>
          </div>
          </transition>
          </div>
      <div class="single-movie-item">
          <img src="../../assets/img/the400blows.jpg" alt="" @mouseover="ninthMouseOver" @mouseout="ninthMouseOut">
           <transition name="fade">
          <div class="detials right-item" v-if="ninthShow">
          <div class="title" data-aos="fade-left" data-aos-delay="175">四百击</div>
          <div class="info" data-aos="fade-left" data-aos-delay="175">
          <span class="length">99 Min</span>
          <span class="year">(1959)</span>
          </div>
          <div class="desc" data-aos="flip-up" data-aos-delay="200">
            作文课上，安托万在同学传来的女人图像上涂鸦，被罚站墙角。安托万逃学后回到学校，慌乱中谎称母亲去世，获得了老师的原谅和疼惜。不想继父获知了他逃学，与母亲一起赶到学校，戳穿了他的谎言，还当着全班同学打了他两耳光。 安托万决定留下一封信离家出走。
          </div>
          </div>
          </transition>
          </div>
      <div class="single-movie-item">
          <img src="../../assets/img/trainspotting.jpg" alt="" @mouseover="tenthMouseOver" @mouseout="tenthMouseOut">
           <transition name="fade">
          <div class="detials right-item" v-if="tenthShow">
          <div class="title" data-aos="fade-left" data-aos-delay="175">猜火车</div>
          <div class="info" data-aos="fade-left" data-aos-delay="175">
          <span class="length">94 Min</span>
          <span class="year">(1996)</span>
          </div>
          <div class="desc" >
            苏格兰爱丁堡，雷登、土豆和病仔三个青年过着混沌糜烂的生活，他们吸毒、滥交、诈骗无所不作，而在如此肆无忌惮挥霍青春的过程中，毒品成为万恶之源。土豆抢劫时锒铛入狱，雷登吸食毒品过量被送往医院抢救，后被强制戒毒。恐怖的幻觉和心底生气的恐惧迫使他不得不和毒品一刀两断。
          </div>
          </div>
          </transition>

    </div>
          </div>
<div slot="movie-nav" class="movie-nav">
    <router-link to="/movie">
    <button class="slide">View More</button>
    </router-link>
</div>
</movie-bar>
</template>

<script>
import MovieBar from '../common/movie-bar.vue'
import AOS from 'aos'

export default {
name:'MainMovieBar',
data() {
    return {
        firstShow: '',
        secondShow:'',
        thirdShow:'',
        fourthShow:'',
        fifthShow:'',
        sixthShow:'',
        seventhShow:'',
        eighthShow:'',
        ninthShow:'',
        tenthShow:'',
        movieActive:true
    };
},
methods:{
    firstMouseOver(){
        this.firstShow = true
    },
    firstMouseOut(){
        this.firstShow = false
    },
    secondMouseOver(){
     this.secondShow = true   
    },
    secondMouseOut(){
     this.secondShow = false
    },
    thirdMouseOver(){
        this.thirdShow = true
    },
    thirdMouseOut(){
        this.thirdShow = false
    },
        fourthMouseOver(){
        this.fourthShow = true
    },
    fourthMouseOut(){
        this.fourthShow = false
    },
    fifthMouseOver(){
        this.fifthShow = true
    },
    fifthMouseOut(){
        this.fifthShow = false
    },
    sixthMouseOver(){
        this.sixthShow = true
    },
    sixthMouseOut(){
        this.sixthShow = false
    },
        seventhMouseOver(){
        this.seventhShow = true
    },
    seventhMouseOut(){
        this.seventhShow = false
    },
        eighthMouseOver(){
        this.eighthShow = true
    },
    eighthMouseOut(){
        this.eighthShow = false
    },
        ninthMouseOver(){
        this.ninthShow = true
    },
    ninthMouseOut(){
        this.ninthShow = false
    },
        tenthMouseOver(){
        this.tenthShow = true
    },
    tenthMouseOut(){
        this.tenthShow = false
    },

},
components:{
    MovieBar,
    AOS
},

}
</script>

<style>
@import 'movie-bar.css';
.movie-nav{
    text-align: center;
}
.slide {
    width: 200px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    margin: 7.5vh;
    height: 55px;
    text-align:center;
    border: none;
    background-size: 300% 100%;

    border-radius: 50px;
    transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
        background-image: linear-gradient(to right, #f5ce62, #e43603, #fa7199, #e85a19);
    box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);
}

.slide:hover {
    background-position: 100% 0;
    transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}

.slide:focus {
    outline: none;
}

</style>