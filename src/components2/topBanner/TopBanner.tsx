import { FC } from 'react';

const TopBanner: FC = () => {

  return (
    <div className="py-[40px]">
      <p className="w-full text-center font-BodoniModa text-primary2 font-semibold" style={{ fontSize: '1.625em', letterSpacing: '0.5px' }}>
        2025.06.07
      </p>
      <p className='font-GowㅌunBatang text-primary2 text-center'>11:20 AM</p>

      <div className='flex items-center justify-center my-[12px]'>
        <div className='w-[22px]'>
          <svg width="100%" height="100%" viewBox="0 0 22 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.557 5.672c.032-.048.048-.064.048-.064-.112-.032-.24-.048-.368-.096v-.016c.256-.096.56-.208.848-.208.016-.032.048-.048.064-.064 0 0 0-.048.016-.064l-.032-.048c-.048.032-.08.032-.128.032-.208.08-.448.112-.64.16-.88.272-1.728.64-2.608.976l-.864.384c-.4.16-.8.256-1.2.256-.144 0-.256 0-.4-.048-.08-.128.096-.176.096-.32.032-.144.096-.272.16-.4.08-.208.176-.448.288-.656.048-.144.032-.336.112-.496.08-.048 0-.176.032-.256 0-.112-.208-.112-.112-.24-.048-.016-.096-.016-.112-.048-.144-.08-.32-.016-.448-.208-.016 0-.064 0-.096.032-.048.016-.096.064-.176.096-.336.208-.656.416-.992.656-.448.32-.896.64-1.36.928a8.698 8.698 0 0 1-1.328.816c-.128.048-.24.144-.384.144-.08-.048-.08-.048.24-.368.096-.064.032-.224.16-.288.256-.256.448-.528.752-.752.208-.208.416-.368.56-.56.32-.288.592-.56.992-.768.256-.08.576-.288.992-.16.112.032.128-.096.048-.208-.112-.192-.592-.416-.816-.304-.384.112-.768.224-1.104.448-.4.288-.768.528-1.104.864-.336.336-.72.688-1.056 1.088-.112.176-.272.352-.384.512a.988.988 0 0 0-.112.496c.064.48.224.72.656.8.176.016.352 0 .528 0 .048 0 .112-.048.16-.064.288-.176.592-.336.864-.544.256-.128.48-.336.72-.512.192-.128.416-.272.64-.4l1.136-.8c.016-.032.016-.032.064.016v.032c-.064.224-.16.416-.192.64-.08.384-.128.768.192 1.104.016.08.048.128.064.192.08.208.272.272.448.336.192.064.4.176.624.016h.16c.272-.064.528-.096.784-.144.352-.08.672-.208.992-.4l.464-.16c.112-.048.128-.224.32-.208h.048c.096-.128.224-.272.416-.304h.016v-.016c-.176.048-.336.112-.48.16 0 0-.032-.048-.064-.048 0-.016 0-.016.032-.064a14.69 14.69 0 0 1 1.008-.4.75.75 0 0 1 .464-.288.523.523 0 0 1 .352-.192ZM7.165 7.144h-.048c-.288-.16-.496.032-.72.064-.032 0-.032-.016-.032-.016-.032 0-.032-.016-.032-.016v-.032c.064-.032.08-.064.096-.064.352-.08.656-.16.976-.224.128-.032.24 0 .352 0-.16.176-.432.176-.592.288Zm2.352-1.392v-.016c.224-.112.448-.224.72-.176h-.016c-.24.112-.464.176-.704.192Zm-.672.304a.474.474 0 0 1-.4.112c.112-.144.224-.16.4-.144v.032Zm0-.048c.128-.112.24-.176.4-.144-.096.144-.224.16-.4.144ZM4.509 4.952c.064-.128.096-.176.24-.16-.048.128-.144.16-.24.16Zm-.496.336c.048-.128.112-.176.24-.176-.064.128-.128.176-.24.176Zm.736-.512c.032-.112.112-.144.224-.144-.016.112-.112.16-.224.144Zm-1.232.832c.064-.112.144-.16.224-.16-.016.112-.08.176-.224.16Zm5.776.256c0-.032.016-.112.032-.112h.192c-.08.144-.16.112-.224.112Zm-5.504-.448c.016-.112.112-.128.224-.128-.016.112-.16.128-.224.128Zm.48-.304c.032-.112.112-.144.24-.16-.064.096-.128.16-.24.16Zm4.064 1.152h-.144c.048-.112.176-.064.224-.096 0 .064-.016.096-.08.096Zm-5.056-.512c.048-.064.128-.144.208-.144-.016.096-.096.144-.208.144Zm7.328-.304c-.048.064 0 .064.064.112h.016c0-.032.032-.08.064-.112-.048 0-.064-.032-.144 0ZM8.189 6.824H8.06c0-.048.048-.08.112-.08.016 0 .016.032.032.032 0 .032-.016.048-.016.048Zm-.32-.416s-.016 0-.048-.048h.032c.016 0 .048 0 .048.048h-.032Zm-4.656-.576c0-.016.032-.08.048-.08 0 .08-.016.08-.048.08Zm4.96.48-.048-.032h.048v.032Zm-.192.56c-.016-.048 0-.048.016-.048 0 .032-.016.032-.016.048Zm-4.832-.976v-.032h.032l-.032.032Zm7.648-.48c-.032 0-.032 0-.032.032 0-.016.016-.016.032-.032Zm-.944.4h.032v.016l-.032-.016Zm-.608.688s.016-.016.032-.016c-.016 0-.032.016-.032.016ZM5.02 4.584v-.016h.016l-.016.016ZM13.409 3c.016.032 0 .032-.032.048l-.016-.016C13.377 3 13.41 3 13.425 3c-.016-.048 0-.096.048-.144.048-.064.144-.144.192-.24.048-.112.192-.144.272-.24.048-.032.112-.112.16-.16.176-.16.336-.304.48-.48.208-.192.16-.144.192-.432 0-.064-.032-.112-.032-.16s0-.096-.016-.112c-.048-.048-.096-.096-.128-.144-.016-.08-.064-.096-.144-.128-.032 0-.064-.016-.08-.016-.032 0-.048-.032-.096-.032s-.128 0-.144.08c-.032.016-.048.064-.096.096a2.272 2.272 0 0 1-.192.208c-.24.24-.48.448-.688.736a.73.73 0 0 1-.192.192c-.08.08-.096.176-.176.24-.144.144-.256.256-.384.432-.016.064-.096.112-.16.192-.064.048-.096.144-.144.192a.25.25 0 0 1-.208.112c-.096-.016-.224 0-.32 0-.064 0-.144 0-.208-.048-.032-.016-.048-.016-.08 0-.048.048-.112.048-.208.048h-.688c-.048 0-.096 0-.144.032-.032.016-.08.016-.096.016-.128.032-.24.032-.352.032h-.08c-.064.048-.144.048-.208.048h-.384c-.096 0-.176 0-.256.048-.032.016-.096.016-.144-.032-.032-.016-.048-.016-.08 0a.38.38 0 0 1-.192.048h-.304c-.128.064-.272.048-.384.048-.016 0-.048 0-.048.016-.016 0-.048 0-.064.032-.048.016-.096.016-.144-.032-.048-.016-.096-.016-.128 0a.731.731 0 0 0-.256.176c-.032.016-.048.048-.048.096v.192c0 .096.048.192.112.24.032.048.048.064.096.064.08 0 .144-.016.192.032a.085.085 0 0 0 .128.016c.064-.048.16-.048.224-.048.128 0 .24-.016.368-.016.048 0 .112 0 .16-.032.048-.016.08-.016.096-.016.144-.032.272.016.384-.048.032-.032.064-.032.096-.032h.384c.016 0 .064 0 .096-.016.048-.032.144-.032.208-.032.128 0 .272-.016.4-.016.048 0 .096.016.128 0 .096-.048.192-.048.288-.048.16-.032.352.016.528-.08h.496c.016 0 .016.032.016.032v.016c-.064.08-.096.176-.16.272-.08.096-.128.208-.176.336-.016.016 0 .032-.016.032.016 0 .048.032.064.048h-.016c-.032 0-.032-.016-.032-.048-.08.048-.128.096-.128.192h.064s.032-.016.032-.048c0 .032.016.032.016.032-.016.016-.016.016-.048.016 0 .032 0 .048-.048.048 0 0 0-.016-.016-.048-.032.032-.048.048-.048.08v.064c.016 0 .048 0 .016.032 0 .016-.016.016-.016.016a.304.304 0 0 1-.048.144c-.032.032-.032.032-.128.032 0 0-.016 0-.016.016 0 .048.048.08.016.128a.258.258 0 0 1-.048.144c-.016.016-.048.064-.096.112h-.016v.096l-.224.4-.016.032s0 .016-.032.048c0 .016 0 .048-.016.048-.048.016-.096.048-.048.112-.048.096-.096.224-.176.336-.048.096-.048.192-.096.288-.032.048-.016.096-.016.16-.016 0-.016.032-.016.048a.258.258 0 0 0-.048.144c0 .048 0 .128-.032.176-.048.064-.048.16-.048.24 0 .224.032.464 0 .736 0 .064.08.144.08.24 0 .048.016.064.048.096.016.048.032.064.064.112.048.048.096.096.112.144.032.048.048.112.096.16.048.032.096.08.144.128.08.048.144.096.192.144.08.064.144.144.272.144a.168.168 0 0 0 .208 0c.032-.032.048-.032.064-.032.08 0 .144 0 .224-.016.064-.032.144-.032.208-.048.08-.032.176-.08.24-.048.032 0 .032 0 .032-.032.16-.064.304-.112.448-.208.048-.048.096-.08.16-.128.128-.048.224-.128.368-.176.112-.048.192-.192.336-.24.048-.048.112-.128.176-.176.08-.016.096-.144.176-.144.064-.064.112-.144.16-.208v-.096h-.064c0 .048-.032.048-.048.064 0 .032-.032.048-.08.048 0 .032 0 .048-.016.048h-.032c.032-.016.032-.048.048-.016 0-.048.032-.08.08-.08 0-.048.016-.064.064-.064 0-.032 0-.048.048-.08v.032c0-.048-.016-.08-.048-.08-.064-.016-.064-.032-.048-.032.048-.032.08-.048.128-.08.048-.016.064-.064.112-.096.128-.064.224-.192.336-.288v-.048c0-.016-.016-.016-.048-.016-.048.016-.096.064-.16.048 0 .048-.032.064-.08.064v.032a2.272 2.272 0 0 0-.192.208c-.112.032-.192.128-.288.192-.064.096-.176.112-.256.208a.332.332 0 0 1-.16.096c-.048.048-.08.096-.144.128-.048.048-.096.064-.144.096-.048.016-.08.016-.08.064-.016.032-.048.048-.064.048h-.192c0 .048-.032.08-.08.096 0 .032-.016.032-.048 0v-.016c.032-.032.032-.048.048-.048.032 0 .048 0 .08-.032l.016-.016c.032-.048.096-.048.144-.096.048-.048.128-.048.176-.096a.285.285 0 0 1 .112-.128c.096-.048.144-.112.224-.144.064-.048.144-.096.208-.144.08-.016.144-.08.192-.128.096-.128.24-.192.352-.288.032-.032.08-.032.096-.032 0-.048.032-.048.08-.048 0-.064.048-.096.096-.144.016-.048.096-.064.144-.064v.016c.016-.048.016-.064.064-.064 0-.048.048-.096.08-.128.048-.048.048-.096.048-.144v-.048c-.08 0-.096.08-.144.096-.08.032-.144.096-.192.144-.096.096-.176.176-.288.224l-.144.144a.556.556 0 0 0-.144.096c-.08.064-.16.16-.256.208-.032 0-.048.032-.048.048-.032.032-.048.08-.08.096-.048.016-.064.048-.112.048-.128.064-.24.112-.336.208h-.048c-.048.032-.08.032-.128.048a.677.677 0 0 1-.208.176c-.096.048-.16.096-.24.16-.048.048-.144.08-.192.128-.048.016-.096 0-.112.016-.048.032-.096.08-.144.096 0 0-.032.032-.048.032-.08 0-.144.048-.224.064a.27.27 0 0 1-.16.048c-.096 0-.192 0-.288-.048h-.112c-.048 0-.096 0-.176-.016 0 0-.048-.032-.048-.048V8.68c0-.048-.016-.08-.064-.096-.032 0-.048-.032-.048-.048 0-.08-.032-.128.016-.192v-.032c.032-.016 0-.048 0-.048-.016-.016-.016-.048-.016-.064 0-.032.016-.048.016-.08.032-.048-.016-.064 0-.112.032-.048.032-.096.032-.128 0-.064 0-.16.048-.208.016-.016.016-.064.016-.096 0-.064-.016-.144.032-.192.048-.064.048-.144.064-.208.08-.128.144-.24.176-.384 0-.032.016-.048.016-.064.032-.128.176-.176.176-.32.048-.096.096-.208.16-.336.016-.016.016-.064.048-.096.064-.064.096-.144.144-.208.048-.112.096-.208.16-.304.032 0 .032-.032.032-.048 0-.08.048-.128.096-.176a.441.441 0 0 1 .112-.144c.128-.256.32-.496.464-.736.032-.096.128-.144.16-.24.048-.096.112-.144.16-.24.048-.064.128-.144.24-.144.048-.016.128-.048.224-.048h.4c.016 0 .064 0 .096-.016.064-.048.16-.032.24-.032.144-.016.288-.016.4-.016.048 0 .08.016.096 0 .096-.08.224-.048.304-.048h.464c.016 0 .064 0 .096-.032.048-.048.144-.048.208-.048h.88c.08 0 .144 0 .224-.048h.096c.208 0 .416 0 .656-.016h.512c.016 0 .064 0 .096-.016.032-.032.08-.032.128-.032h3.088c.064 0 .096-.048.096-.112v-.224c0-.064-.08-.192-.144-.256-.048-.032-.048-.08-.048-.096-.032-.048-.048-.08-.08-.08-.064 0-.144-.016-.208.032-.08.016-.176.048-.24.016-.08 0-.176.032-.24 0-.08-.048-.128.048-.192.032-.016-.032-.048-.032-.064-.032 0 .032 0 .048-.032.08l-.016-.032c.016-.016.016-.016.048-.016-.048-.096-.08-.096-.128 0-.016 0-.016.016-.048.048-.096 0-.192.016-.256-.032-.032-.016-.048-.016-.08 0-.144.048-.16.048-.336 0-.016-.016-.016-.016-.048 0-.016 0-.048.032-.064.032h-.432c-.048 0-.064-.048-.112-.032-.048 0-.08.032-.128.032a.742.742 0 0 1-.336.064h-.944c-.048 0-.08 0-.128.032-.048.016-.096.016-.144.016-.304 0-.608 0-.928.032h-.112c-.048.048-.112.048-.192.048h-.784c-.048 0-.128 0-.144.016-.064.032-.096.032-.144 0a.27.27 0 0 1-.16.048h-.768Zm-.16.192c0-.016 0-.048.016-.048.032-.016.048-.016.048-.016h.528c.048 0 .112 0 .16-.032.048-.048.096-.016.128-.016.208 0 .416 0 .64-.032.096 0 .192.032.256-.016.032-.032.08-.032.096-.032h.496c.08 0 .176 0 .224-.048.016 0 .048.032.064.032 0 0 .032.016.048.016 0-.016.032-.048.032-.048.016-.016.064-.016.096-.016h.832c.016 0 .064 0 .112-.032.08-.048.128-.048.192 0 .032.032.048.032.08 0 .016-.016.064-.016.112-.016.224 0 .448-.032.688 0h1.408c.032 0 .032 0 .048.016-.016 0-.016.032-.048.032H18.337c-.096 0-.208 0-.304.016-.08.048-.128 0-.176-.016h-.096c-.032.016-.08.048-.112.048-.016 0-.064-.032-.096-.032-.048.032-.096.048-.144 0h-.016c-.144.08-.272.048-.416.048h-.368c-.096 0-.176 0-.24.048-.048.032-.128.032-.192 0-.048-.016-.08-.048-.128 0 0 0-.016-.016-.048-.016-.016 0-.016-.032-.048-.032-.016 0-.016.032-.016.048h-.08c-.16.032-.304.032-.464.032-.096 0-.224-.048-.288.048h-.384c-.128.016-.272-.032-.384.048 0 0-.016-.032-.048-.032-.016 0-.048-.016-.048 0-.096.048-.192.048-.288.048h-.208c-.096 0-.192-.016-.288.032 0 .016-.032 0-.048 0-.048-.048-.112-.032-.192-.032 0 .032 0 .032-.016.048l-.032-.016c.032-.032.048-.032.08-.032Zm-1.456.08c.048 0 .096 0 .096.016-.032 0-.032.032-.048.048 0 0-.032.032-.048.032-.032 0-.048.016-.096.016h-.56c-.064 0-.112 0-.16.032 0 .016-.016 0-.016-.032 0-.016 0-.048.016-.048.08 0 .144-.016.208-.016h.288c.048 0 .08-.032.128-.032.016-.016.048-.016.096-.016.016.048.064.048.096 0Zm-.48 5.696c.112 0 .16 0 .24.032a.137.137 0 0 1 .112 0c.032.032.08.032.128.032 0 0 .016 0 .016.016l-.016.032c-.048.016-.128.016-.192.048-.032.016-.048.016-.048 0a.258.258 0 0 0-.144-.048c-.096.016-.144-.032-.224-.048-.016-.032-.016-.048-.016-.048l.016-.016h.128Zm5.12-5.728c.096.032.192.032.304.032l.032.016h-.032c-.016.032-.064.032-.096.032h-.464a.255.255 0 0 0-.128.048s-.016 0-.016-.048c0-.032 0-.032.016-.048h.384V3.24Zm.976 0c0 .048-.016.048-.064.048-.032-.016-.08-.048-.096-.016-.08.048-.176.064-.24.016 0-.016 0-.016.016-.016.08.016.144-.08.224-.08h.144c.016.032.016.032.016.048Zm.32 0h-.08c-.016 0-.016-.016-.016-.016l.016-.032h.208s.032 0 .032.032c0 0 0 .016-.032.016h-.128Zm-7.136.192h-.048c-.016 0-.016-.016-.016-.016l.016-.032h.192c.032 0 .048.032.08.032-.032 0-.048.016-.048.016h-.176Zm5.984-.24s-.048 0-.064-.016h-.032c0-.032.032-.032.032-.032.048 0 .096-.016.128 0 .032 0 .048 0 .048.032-.016 0-.016.016-.016.016h-.096Zm1.232-.064c.032 0-.016-.032 0-.048h.176s.016.016.048.016c-.032 0-.048.032-.048.032h-.176Zm1.216.064c.032 0 .048.032.08.032-.032.016-.032.016-.048.016h-.128c-.016 0-.016 0-.048-.016 0 0 .032-.032.048-.032h.096Zm-3.424.144v.032c-.032.016-.048.016-.064.016-.032-.016-.048-.016-.08-.048.032 0 .048-.016.08-.016.016 0 .032.016.064.016Zm-1.472.096c-.032 0-.032-.016-.048-.016.016 0 .016-.032.048-.032h.064s.032 0 .032.032c0 0 0 .016-.032.016h-.064Zm1.52-.208c.048-.032.064-.032.112-.032.032 0 .032.032.048.032l-.016.016c-.048.032-.08.032-.128 0 0 0 0-.016-.016-.016Zm-5.296.208h-.016c-.032 0-.048 0-.08-.016.032 0 .032-.032.048-.032h.08l.016.032c0 .016-.016.016-.048.016Zm4.768-.064c0 .016-.016 0-.016 0-.032-.032 0-.032.016-.032.032-.016.048 0 .048.032h-.048Zm.32-.128c-.032 0-.032-.016-.032-.016.032-.032.048-.032.048-.032.032 0 .032.032.032.032v.016h-.048Zm2.944-.144c0-.016.032-.016.048-.016.032 0 .032 0 .032.016 0 0 0 .032-.032.032h-.016l-.032-.032Zm1.296-.16s0-.032-.032-.032c.032-.016.048-.016.048-.016a.07.07 0 0 1 .048.016c-.016.032-.048.032-.064.032Zm-5.248.496c-.016 0-.016-.016-.048-.016.032 0 .032-.032.048-.032s.016.032.048.032c-.032.016-.032.016-.048.016Zm-.288-.16v.016h-.016l.016-.016Zm5.856-.368c-.016 0-.016.032-.016.032-.032-.032-.032-.032 0-.048 0 0 0 .016.016.016Zm-.16 0s0-.016.032-.016v.048c-.032 0-.032-.032-.032-.032Zm-1.088.192c.016 0 .016-.016.016-.016.032 0 .032.016.032.016s0 .032-.032.032c0 0 0-.032-.016-.032Zm-.528 0-.032.032c-.016-.032-.016-.032 0-.048.032 0 .032.016.032.016Zm-.08.144c-.016 0-.016-.016-.016-.016s0-.032.016-.032v.048Zm-.512-.112V3.08c.016 0 .016.016.016.016l-.016.032Zm-1.536.016h.032v.032h-.032v-.032Zm-.352.224c-.032 0-.032 0-.032-.032 0 0 .032 0 .032.032Zm-.432-.144c-.016 0-.016.016-.016.016-.032-.016-.032-.016 0-.016h.016Zm-.016.144s-.032 0-.032-.032c.032 0 .032 0 .048.032h-.016Zm-.384 0s-.032 0-.032-.032h.032l.016.032h-.016Zm-.336.048s0-.032.016-.032c0 0 0 .032.032.032-.032 0-.032.016-.032.016-.016 0-.016-.016-.016-.016Zm-.16-.128h-.032l.032-.016v.016Zm.256 3.264c.048 0 .048-.016.064-.048 0-.016 0-.048-.016-.064l-.032.016c-.016 0-.016.032-.048.032v.016c0 .032.032.032.032.048Zm-.432.576v.064-.016h.048c0-.048-.016-.048-.048-.048Zm0 .064h-.064v-.016c.016.016.016.064.048.048 0 0 .016-.032.016-.048v.016Zm-.576.736v.08c.032 0 .048 0 .048-.032 0-.016-.016-.016-.048-.016v-.032Zm.832-1.248c.032 0 .032 0 .048-.032l-.016-.016c-.032.016-.032.016-.032.048Zm-.064.064c-.048 0-.064.016-.064.064.048-.016.064-.048.064-.064.048 0 .064-.016.064-.064-.048 0-.064.016-.064.064Zm-3.472-1.792v-.048c-.032 0-.048 0-.048.032 0 .016.016.016.048.016Zm-.336.576c0-.016 0-.016-.032-.048l-.016.032c.016.016.016.016.048.016Zm-.24.528c0-.032-.032-.048-.032-.048h-.016c0 .016.016.048.048.048Z" fill="#0c6a31"></path></svg>
        </div>
      </div>
      <p className='font-GowunBatang text-primary2 text-center'>더 베뉴지 1F 네이처홀</p>
    </div>
  )
}

export default TopBanner;