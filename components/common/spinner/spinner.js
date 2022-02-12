export default function Spinner() {
  const css = `
.ispinner {
  position: relative;
  width: 28px;
  height: 28px; }
  .ispinner .ispinner-blade {
    position: absolute;
    top: 11px;
    left: 13.3px;
    width: 2.5px;
    height: 6.5px;
    background-color: #8e8e93;
    border-radius: 1.25px;
    -webkit-animation: iSpinnerBlade 1s linear infinite;
            animation: iSpinnerBlade 1s linear infinite;
    will-change: opacity; }
    .ispinner .ispinner-blade:nth-child(1) {
      -webkit-transform: rotate(45deg) translateY(-6.5px);
              transform: rotate(45deg) translateY(-6.5px);
      -webkit-animation-delay: -1.625s;
              animation-delay: -1.625s; }
    .ispinner .ispinner-blade:nth-child(2) {
      -webkit-transform: rotate(90deg) translateY(-6.5px);
              transform: rotate(90deg) translateY(-6.5px);
      -webkit-animation-delay: -1.5s;
              animation-delay: -1.5s; }
    .ispinner .ispinner-blade:nth-child(3) {
      -webkit-transform: rotate(135deg) translateY(-6.5px);
              transform: rotate(135deg) translateY(-6.5px);
      -webkit-animation-delay: -1.375s;
              animation-delay: -1.375s; }
    .ispinner .ispinner-blade:nth-child(4) {
      -webkit-transform: rotate(180deg) translateY(-6.5px);
              transform: rotate(180deg) translateY(-6.5px);
      -webkit-animation-delay: -1.25s;
              animation-delay: -1.25s; }
    .ispinner .ispinner-blade:nth-child(5) {
      -webkit-transform: rotate(225deg) translateY(-6.5px);
              transform: rotate(225deg) translateY(-6.5px);
      -webkit-animation-delay: -1.125s;
              animation-delay: -1.125s; }
    .ispinner .ispinner-blade:nth-child(6) {
      -webkit-transform: rotate(270deg) translateY(-6.5px);
              transform: rotate(270deg) translateY(-6.5px);
      -webkit-animation-delay: -1s;
              animation-delay: -1s; }
    .ispinner .ispinner-blade:nth-child(7) {
      -webkit-transform: rotate(315deg) translateY(-6.5px);
              transform: rotate(315deg) translateY(-6.5px);
      -webkit-animation-delay: -0.875s;
              animation-delay: -0.875s; }
    .ispinner .ispinner-blade:nth-child(8) {
      -webkit-transform: rotate(360deg) translateY(-6.5px);
              transform: rotate(360deg) translateY(-6.5px);
      -webkit-animation-delay: -0.75s;
              animation-delay: -0.75s; }

@-webkit-keyframes iSpinnerBlade {
  0% {
    opacity: 0.85; }
  50% {
    opacity: 0.25; }
  100% {
    opacity: 0.25; } }

@keyframes iSpinnerBlade {
  0% {
    opacity: 0.85; }
  50% {
    opacity: 0.25; }
  100% {
    opacity: 0.25; } }
`;
  return (
      <>
              <div className="ispinner">
                  <div className="ispinner-blade"></div>
                  <div className="ispinner-blade"></div>
                  <div className="ispinner-blade"></div>
                  <div className="ispinner-blade"></div>
                  <div className="ispinner-blade"></div>
                  <div className="ispinner-blade"></div>
                  <div className="ispinner-blade"></div>
                  <div className="ispinner-blade"></div>
              </div>
          <style>{css}</style>
      </>
  );
}
