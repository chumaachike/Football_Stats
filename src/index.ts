import { MatchReader } from './MatchReader';
import { CSVFileReader } from './CSVFileReader';
import { WinsAnalysis } from './analyzers/WInsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './reportTargets/HtmlReports';

const csvfilereader = new CSVFileReader('football.csv');

const matchReader = new MatchReader(csvfilereader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport('Man United Wins')
);

summary.buildAndPrintReport(matchReader.matches);
