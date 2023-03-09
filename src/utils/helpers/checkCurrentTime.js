/**
 * 현재 시간을 체크하는 함수
 * @param {setDateYMD} 년월일 set state
 * @param {setDateHMS} 시분초 set state
 */
export default function checkCurrentTime(setDateYMD, setDateHMS) {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hours = String(today.getHours()).padStart(2, '0');
  const minutes = String(today.getMinutes()).padStart(2, '0');
  const seconds = String(today.getSeconds()).padStart(2, '0');

  setDateYMD(`${year}-${month}-${date}`);
  setDateHMS(`${hours}:${minutes}:${seconds}`);
}
