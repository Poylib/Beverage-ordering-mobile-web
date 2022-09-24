import styled from 'styled-components';
import noticeTop from '../../assets/notice_top.jpg';
import quailty from '../../assets/brand/quality.png';
import integrity from '../../assets/brand/integrity.png';
import innovation from '../../assets/brand/innovation.png';
import theme from '../../theme';
import ReactPlayer from 'react-player';
import Footer from '../../components/Footer';

const StyledHeader = styled.header`
  display: flex;
  height: 150px;
  flex-direction: column;
  align-items: center;
  background-image: url(${noticeTop});
  background-position: center;
  background-size: cover;
  gap: 20px;
  color: white;
  padding: 30px 0;

  h1 {
    font-size: 8vw;
    font-weight: 500;
  }

  p {
    font-size: 4vw;
  }
`;
const StyledIntroduce = styled.div`
  display: block;
  background-color: #e4dcd2;
  width: 100%;
  padding: 10px 15px 10px 15px;
  text-align: center;
  line-height: 1.5;

  div.contents {
    margin-bottom: 10px;

    h1 {
      font-size: 20px;
      font-weight: 2.5em;
      margin-bottom: 10px;
    }
    p.gray {
      color: #666666;
    }
    p.red {
      color: ${theme.red};
    }
  }
`;

const StyledContents = styled.div`
  display: flex;
  width: 100%;
  padding: auto;
  border-bottom: 1px solid gray;

  img.circle {
    display: flex;
    width: 25%;
    margin: 10px 25px 10px 25px;
  }
  div.title {
    width: 70%;
    text-align: center;
    margin: 10px 25px 10px 25px;

    h2 {
      font-size: 7vw;
      color: ${theme.red};
      margin-bottom: 10px;
    }
    h4 {
      font-size: 5vw;
      margin-bottom: 10px;
      line-height: 1.5em;
    }
    p {
      font-size: 4vw;
    }
  }
`;

const BottomContents = styled.div`
  width: 100%;
  height: 20%;
  bottom: 0;

  div.footer {
    text-align: center;
    align-items: center;
    background-color: #e4dcd2;
    padding: 10px;
    margin: 10px 15px 10px 15px;
  }
`;

const Brand = () => {
  return (
    <div>
      <StyledHeader>
        <h1>BRAND STORY</h1>
        <p>브랜드 소개</p>
      </StyledHeader>
      <StyledIntroduce>
        <div className='contents'>
          <h1>황실에 바치는 차(茶), 일차를 소개합니다.</h1>
          <p className='gray'>一茶는 처음 일, 차 차의 뜻으로 중국 황실에서만</p>
          <p className='gray'>맛 볼 수 있던 프리미엄 퀄리티의 차(茶)를 바친다는</p>
          <p className='gray'>의미를 지니고 있습니다.</p>
          <p className='red'>중국 황실에 진상하던 대만의 프리미엄 잎차를</p>
          <p className='red'>신선하게 우려낸 차, 그것이 바로 일차랍니다.</p>
        </div>
        <p>'아래의 동영상은 테스트용입니다.'</p>
        <ReactPlayer className='player' url={'https://www.youtube.com/watch?v=d-U7gVRuDr4'} playing={false} width='100%' height='250px' muted={true} controls={true} />
      </StyledIntroduce>
      <StyledContents>
        <img className='circle' src={quailty} />
        <div className='title'>
          <h2>Quality</h2>
          <h4>엄격을 더하다</h4>
          <p>잎차 하나 원료 하나 원칙을 지킵니다.</p>
        </div>
      </StyledContents>
      <StyledContents>
        <img className='circle' src={integrity} />
        <div className='title'>
          <h2>Integrity</h2>
          <h4>정직을 더하다</h4>
          <p>숙련된 티마스터가 정성을 다해 만듭니다.</p>
        </div>
      </StyledContents>
      <StyledContents>
        <img className='circle' src={innovation} />
        <div className='title'>
          <h2>Innovation</h2>
          <h4>새로움을 더하다</h4>
          <p>고정관념에 갇히지 않고 끊임없이 새로운 맛을 창조합니다.</p>
        </div>
      </StyledContents>

      <BottomContents>
        <div className='footer'>공들여 더하는 행복 一茶</div>
      </BottomContents>
      <Footer />
    </div>
  );
};

export default Brand;
