/* eslint-disable no-plusplus */
import { Console } from '@woowacourse/mission-utils';
import LottoConsole from './view/LottoConsole.js';
import Player from './model/Player.js';

class App {
  async play() {
    try {
      const budget = await LottoConsole.getBudget();
      const player = new Player(budget);

      // 로또 구매
      player.buyLottos();

      // 구매한 양 출력
      const numOfLottos = player.getNumOfLottos();
      LottoConsole.printAmountOfLotto(numOfLottos);

      // 당첨번호 입력
      const lottoNumbers = await LottoConsole.getLottoNumbers();
      const bonusNumber = await LottoConsole.getBonusNumber();

      // 로또 긁기
      player.checkLottos(lottoNumbers, bonusNumber);

      const scoreCard = player.getScoreCard();
      LottoConsole.printResult(scoreCard);

      const prize = player.getPrize();
      LottoConsole.printRateOfReturn(prize, budget);
    } catch (error) {
      Console.print(error.message);
    }
  }
}

export default App;
