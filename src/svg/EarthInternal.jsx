import * as React from "react"
import Svg, {
  SvgProps,
  Defs,
  Circle,
  Path,
  G,
  Mask,
  Use,
} from "react-native-svg"

function SvgComponent(props) {
  return (
    
    <Svg
      width={300}
      height={300}
      viewBox={"0 0 450 450"}
      {...props}
    >
      <Defs>
        <Circle id="prefix__a" cx={225} cy={225} r={225} />
        <Circle id="prefix__c" cx={225} cy={225} r={225} />
        <Circle id="prefix__e" cx={225} cy={225} r={225} />
        <Circle id="prefix__g" cx={225} cy={225} r={225} />
        <Circle id="prefix__i" cx={225} cy={225} r={225} />
        <Circle id="prefix__k" cx={225} cy={225} r={225} />
        <Path
          id="prefix__m"
          d="M0 0c120.398 0 218 97.602 218 218S120.398 436 0 436z"
        />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Circle cx={225} cy={225} r={225} fill="#545BFE" fillRule="nonzero" />
        <Mask id="prefix__b" fill="#fff">
          <Use xlinkHref="#prefix__a" />
        </Mask>
        <Path
          fill="#4FCDF9"
          fillRule="nonzero"
          d="M134 351c6.627 0 12-5.373 12-12s-5.373-12-12-12h-19c-6.627 0-12-5.373-12-12s5.373-12 12-12h-2c6.627 0 12-5.373 12-12s-5.373-12-12-12h-10c-6.627 0-12-5.373-12-12s5.373-12 12-12 12-5.373 12-12-5.373-12-12-12-12-5.373-12-12 5.373-12 12-12h49c6.627 0 12 5.373 12 12s-5.373 12-12 12h2v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.727 11.5 11.99v.01h51c6.627 0 12 5.373 12 12s-5.373 12-12 12h-6v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01c6.627 0 12 5.373 12 12s-5.373 12-12 12h-27v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h-4c6.627 0 12 5.373 12 12s-5.373 12-12 12h-29c-6.627 0-12-5.373-12-12s5.373-12 12-12h-5zM49 183c6.627 0 12 5.373 12 12s-5.373 12-12 12H14c-6.627 0-12-5.373-12-12s5.373-12 12-12h35zm49-24c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm78-144c6.627 0 12 5.373 12 12s-5.373 12-12 12h-1v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.727 11.5 11.99V63h7c6.627 0 12 5.373 12 12s-5.373 12-12 12h-69v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h5c6.627 0 12 5.373 12 12s-5.373 12-12 12H-1c-6.627 0-12-5.373-12-12s5.373-12 12-12H9c6.627 0 12-5.373 12-12S15.627 87 9 87h4C6.373 87 1 81.627 1 75s5.373-12 12-12h6c6.627 0 12-5.373 12-12s-5.373-12-12-12h-48c-6.627 0-12-5.373-12-12s5.373-12 12-12h205z"
          mask="url(#prefix__b)"
        />
        <Mask id="prefix__d" fill="#fff">
          <Use xlinkHref="#prefix__c" />
        </Mask>
        <Path
          fill="#4FCDF9"
          fillRule="nonzero"
          d="M390 327c6.627 0 12-5.373 12-12s-5.373-12-12-12-12-5.373-12-12 5.373-12 12-12h-3c6.627 0 12-5.373 12-12s-5.373-12-12-12h-45c-6.627 0-12-5.373-12-12s5.373-12 12-12 12-5.373 12-12-5.373-12-12-12h-34c-6.627 0-12-5.373-12-12s5.373-12 12-12h26c6.627 0 12-5.373 12-12s-5.373-12-12-12-12-5.373-12-12 5.373-12 12-12h56c6.627 0 12 5.373 12 12s-5.373 12-12 12l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h91c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.727 11.5 11.99v.01h10c6.627 0 12 5.373 12 12s-5.373 12-12 12h-15l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h-2c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h-4c6.627 0 12 5.373 12 12s-5.373 12-12 12h-36c-6.627 0-12-5.373-12-12s5.373-12 12-12h-4zm90-24c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12 5.373-12 12-12zm-18-168c6.627 0 12 5.373 12 12s-5.373 12-12 12h-14c-6.627 0-12-5.373-12-12s5.373-12 12-12h14zm198-72c6.627 0 12 5.373 12 12s-5.373 12-12 12h-7v.01c-6.395.263-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h16c6.627 0 12 5.373 12 12s-5.373 12-12 12H495c-6.627 0-12-5.373-12-12s5.373-12 12-12h-5c6.627 0 12-5.373 12-12s-5.373-12-12-12h-41c-6.627 0-12-5.373-12-12s5.373-12 12-12h211zM359 87c6.627 0 12 5.373 12 12s-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12s5.373-12 12-12h24zm38 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-3c-6.627 0-12-5.373-12-12s5.373-12 12-12h3zm13-48c6.627 0 12 5.373 12 12s-5.373 12-12 12h-24c-6.627 0-12-5.373-12-12s5.373-12 12-12h24z"
          mask="url(#prefix__d)"
        />
        <Mask id="prefix__f" fill="#fff">
          <Use xlinkHref="#prefix__e" />
        </Mask>
        <Path
          fill="#FFF"
          fillRule="nonzero"
          d="M413 111c6.627 0 12 5.373 12 12s-5.373 12-12 12h-62c-6.627 0-12-5.373-12-12s5.373-12 12-12h62zM307 51c0-6.627-5.373-12-12-12H175c-6.627 0-12-5.373-12-12s5.373-12 12-12h49c6.627 0 12-5.373 12-12s-5.373-12-12-12h-16c-6.627 0-12-5.373-12-12s5.373-12 12-12h62c6.627 0 12 5.373 12 12s-5.373 12-12 12h2v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99V15h160c6.627 0 12 5.373 12 12s-5.373 12-12 12h-68l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.5 11.99V63h3c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12zm128 12c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm-192 0c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20zm231-96c6.627 0 12 5.373 12 12s-5.373 12-12 12H318c-6.627 0-12-5.373-12-12s5.373-12 12-12h156z"
          mask="url(#prefix__f)"
        />
        <Mask id="prefix__h" fill="#fff">
          <Use xlinkHref="#prefix__g" />
        </Mask>
        <Path
          fill="#FFF"
          fillRule="nonzero"
          d="M97 363c0-6.627-5.373-12-12-12H17c-6.627 0-12-5.373-12-12s5.373-12 12-12h101c6.627 0 12-5.373 12-12s-5.373-12-12-12H95c-6.627 0-12-5.373-12-12s5.373-12 12-12h118c6.627 0 12 5.373 12 12s-5.373 12-12 12h-47v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h14c6.627 0 12 5.373 12 12s-5.373 12-12 12h-26l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h3c6.627 0 12 5.373 12 12s-5.373 12-12 12H81c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12zm151-36c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20z"
          mask="url(#prefix__h)"
        />
        <Mask id="prefix__j" fill="#fff">
          <Use xlinkHref="#prefix__i" />
        </Mask>
        <Path
          fill="#FFF"
          fillRule="nonzero"
          d="M349 459c0-6.627-5.373-12-12-12h-68c-6.627 0-12-5.373-12-12s5.373-12 12-12h101c6.627 0 12-5.373 12-12s-5.373-12-12-12h-23c-6.627 0-12-5.373-12-12s5.373-12 12-12h118c6.627 0 12 5.373 12 12s-5.373 12-12 12h-47v.01c-6.395.262-11.5 5.53-11.5 11.99s5.105 11.728 11.5 11.99v.01h14c6.627 0 12 5.373 12 12s-5.373 12-12 12h-26l-.001.01c-6.395.263-11.499 5.53-11.499 11.99s5.104 11.727 11.499 11.99l.001.01h3c6.627 0 12 5.373 12 12s-5.373 12-12 12h-76c-6.627 0-12-5.373-12-12s5.373-12 12-12h4c6.627 0 12-5.373 12-12zm151-36c6.627 0 12 5.373 12 12s-5.373 12-12 12h-20c-6.627 0-12-5.373-12-12s5.373-12 12-12h20z"
          mask="url(#prefix__j)"
        />
        <Mask id="prefix__l" fill="#fff">
          <Use xlinkHref="#prefix__k" />
        </Mask>
        <Path
          fill="#000"
          fillRule="nonzero"
          mask="url(#prefix__l)"
          opacity={0.078}
          d="M225.484-25h250.484v500H225.484z"
        />
        <G transform="translate(225 7)">
          <Mask id="prefix__n" fill="#fff">
            <Use xlinkHref="#prefix__m" />
          </Mask>
          <Use fill="#2A2D80" xlinkHref="#prefix__m" />
          <Circle
            cx={1.5}
            cy={219.5}
            r={208.5}
            fill="#952525"
            mask="url(#prefix__n)"
          />
          <Circle
            cx={2}
            cy={218}
            r={178}
            fill="#E0592F"
            mask="url(#prefix__n)"
          />
          <Circle
            cx={2}
            cy={218}
            r={107}
            fill="#F89035"
            mask="url(#prefix__n)"
          />
          <Circle
            cx={1}
            cy={219}
            r={51}
            fill="#FFF1AA"
            mask="url(#prefix__n)"
          />
        </G>
      </G>
    </Svg>
  )
}

export default SvgComponent
