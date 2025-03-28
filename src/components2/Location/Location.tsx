import { FC, useEffect } from 'react';
import NaverMapIcon from './../../assets/icon/icon_navermap_w48.png';
import KakaoMapIcon from './../../assets/icon/icon_kakaonavi_w48.png';
import TmapIcon from './../../assets/icon/icon_tmap_w48.png';
import { ReactComponent as ParkingIcon } from './../../assets/icon/parking.svg';
import { ReactComponent as TrainIcon } from './../../assets/icon/train.svg';
import { ReactComponent as BusIcon } from './../../assets/icon/bus.svg';

const Location: FC = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    // const lat = 37.505514447293876;
    // const long = 126.88379188839032;
    const lat = 37.56020938898568;
    const long = 126.83934873624405;

    const map = new window.kakao.maps.Map(container, {
      center: new window.kakao.maps.LatLng(lat, long), //지도의 중심좌표.
      level: 4, //지도의 레벨(확대, 축소 정도)
    });

    const markerPosition = new window.kakao.maps.LatLng(lat, long);

    // 마커를 생성합니다
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    // const zoomControl = new window.kakao.maps.ZoomControl();
    // map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
  }, []);

  return (
    <div>
      <div className="w-full py-4 font-GowunBatang flex flex-col items-center justify-center gap-3">
        <div className=" text-base">더 베뉴지</div>
        <div className="text-[#797979] text-sm">
          서울 특별시 강서구 강서로 388 (등촌동)
        </div>
        <div className="text-[#797979] text-sm">
          1F 네이처홀
        </div>
      </div>
      <div id="map" style={{ width: '100%', height: 265 }}></div>
      <div className="flex flex-row bg-darkBg text-contentPrimary mb-6">
        <div
          className="flex flex-1 px-2 py-3 flex-row items-center"
          onClick={() => {
            window.open('https://naver.me/5r9k8Pa6', '_blank');
          }}
        >
          <img
            src={NaverMapIcon}
            alt=""
            className="w-[16px] h-[16px] mr-2 rounded-sm"
          />
          <span className="text-xs">네이버 지도</span>
        </div>
        <div
          className="flex flex-1 px-2 py-3 flex-row items-center"
          onClick={() => {
            window.open('https://kko.kakao.com/xjmiqUVW4p', '_blank');
          }}
        >
          <img
            src={KakaoMapIcon}
            alt=""
            className="w-[16px] h-[16px] mr-2 rounded-sm"
          />
          <span className="text-xs">카카오 네비</span>
        </div>
        <div
          className="flex flex-1 px-2 py-3 flex-row items-center"
          onClick={() => {
            window.open('https://tmap.life/da14baeb', '_blank');
          }}
        >
          <img
            src={TmapIcon}
            alt=""
            className="w-[16px] h-[16px] mr-2 rounded-sm"
          />
          <span className="text-xs">티맵</span>
        </div>
      </div>

      <div className="px-[24px] pb-[15px] font-GowunBatang">
        <p style={{ lineHeight: '190%', fontSize: '0.938em' }}>🚇 지하철 이용 시</p>
        <p style={{ lineHeight: '150%' }}> - 5호선 발산역 3번 출구 방향 1분 이내</p>
        <p style={{ lineHeight: '150%' }}> - 9호선 양천향교역 6번 출구 도보 10분 직진</p>
      </div>

      <div className="px-[24px] pb-[15px] font-GowunBatang">
        <p style={{ lineHeight: '190%', fontSize: '0.938em' }}>🚌 버스 이용 시</p>
        <p style={{ lineHeight: '150%' }}> - 발산역 정류장 하차</p>
        <p style={{ lineHeight: '150%' }}> - 지선버스 : 6630, 6632, 6642, 6645, 6648, 6657, 6712</p>
        <p style={{ lineHeight: '150%' }}> - 간선버스 : 601, 605, 652, 654, 661</p>
        <p style={{ lineHeight: '150%' }}> - 일반버스 : 60, 60-3, 88, 1002</p>
        <p style={{ lineHeight: '150%' }}> - 직행버스 : 3000, 8000</p>
      </div>

      <div className="px-[24px] pb-[15px] font-GowunBatang">
        <p style={{ lineHeight: '190%', fontSize: '0.938em' }}>🚗 주차안내</p>
        <p style={{ lineHeight: '150%' }}> - 건물 내 B2-B5, 3F ~ 5F 2시간 무료주차</p>
        <p style={{ lineHeight: '150%' }}> - 엘레베이터 옆 무인정산기 주차 등록</p>
      </div>

      {/* <div className="flex flex-row font-IropkeBatangM text-contentPrimary pb-6 border-b-[1px] border-b-mainBorder">
        <div className="flex-1 flex justify-center">
          <div className="w-[40px] h-[40px] rounded-full bg-darkBg flex items-center justify-center">
            <ParkingIcon fill="#89757a" />
          </div>
        </div>
        <div className="flex-[4]">
          <div className="text-lg mb-2">자가용</div>
          <div className="text-sm">
            웨딩 고객 주차 <b>1시간 30분</b> 무료 <br />
            지하주차장 혼잡시 야외 주차장 이용 부탁드립니다.
          </div>
        </div>
      </div>

      <div className="flex flex-row font-IropkeBatangM text-contentPrimary py-6 border-b-[1px] border-b-mainBorder">
        <div className="flex-1 flex justify-center">
          <div className="w-[40px] h-[40px] rounded-full bg-darkBg flex items-center justify-center">
            <BusIcon fill="#89757a" />
          </div>
        </div>
        <div className="flex-[4]">
          <div className="text-lg mb-2">셔틀버스</div>
          <div className="text-sm">
            [타는곳] <b>신도림역</b> 1번 출구
          </div>
        </div>
      </div>

      <div className="flex flex-row font-IropkeBatangM text-contentPrimary py-6 border-b-[1px] border-b-mainBorder">
        <div className="flex-1 flex justify-center">
          <div className="w-[40px] h-[40px] rounded-full bg-darkBg flex items-center justify-center">
            <TrainIcon fill="#89757a" />
          </div>
        </div>
        <div className="flex-[4]">
          <div className="text-lg mb-2">지하철</div>
          <div className="text-sm">
            [1, 2호선] <b>신도림역</b> 1번 출구 도보 10분
          </div>
          <div className="text-sm">
            [1호선] <b>구로역</b> 3번 출구 도보 5분
          </div>
        </div>
      </div>

      <div className="flex flex-row font-IropkeBatangM text-contentPrimary py-6">
        <div className="flex-1 flex justify-center">
          <div className="w-[40px] h-[40px] rounded-full bg-darkBg flex items-center justify-center">
            <BusIcon fill="#89757a" />
          </div>
        </div>
        <div className="flex-[4]">
          <div className="text-lg mb-2">버스</div>
          <div className="text-sm">
            <b>신도림동 (구로역)</b> <br />
            [경기일반] 10, 11-1, 11-2, 83, 88, 530 <br />
            [간선] 160, 503, 600, 660, 662, N16(심야) <br />
            [지선] 6515, 6516, 6637, 6640A, 6640B(신도림역방면), 6713, 6411,
            6511 <br />
            [직행] 301, 320, 5200 <br />
            [마을] 양천04
          </div>
          <br />
          <div className="text-sm">
            <b>신도림중학교</b> <br />
            [지선] 5615, 5714, 6512, 6411, 6511
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Location;
