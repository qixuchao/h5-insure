import robot from '@/assets/images/record/robot.png';
import bj from '@/assets/images/record/bj.png';
// import palm from '@/assets/images/record/palm.png';
import palm from '@/assets/images/record/love.png';
import './index.scss';

export default () => {
  return (
    <div class="record-header">
      <div class="record-banner">
        <img src={robot} class="icon-robot" />
        <div class="content">
          <div class="title">
            <span class="name">7步录入 拜访记录</span>
          </div>
          <div class="desc">拜访记录 I 快速记录</div>
        </div>
        <img src={bj} class="icon-bg" />
      </div>
      <div class="tips">
        <p>
          <div class="icon-palm">
            <img src={palm} />
          </div>
          <span>我是小意~ 您的智能管家！</span>
        </p>
        <p>我具备专业便捷的记录能力，准备好我们就开始吧~</p>
      </div>
    </div>
  );
};
