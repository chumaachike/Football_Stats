import { MatchData } from '../MatchData';
import { Analyzer } from '../Summary';
import { MatchResult } from '../MatchResults';

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let numWins = 0;
    for (let match of matches) {
      if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        numWins++;
      } else if (
        match[2] === 'Man United' &&
        match[5] === MatchResult.AwayWin
      ) {
        numWins++;
      }
    }
    return `Team ${this.team} won ${numWins} games`;
  }
}
