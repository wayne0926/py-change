import pinyin from "pinyin";
import $ from "jquery";
const changee = () => {
    $('#output').text(pinyin($('#input').val()), {style:pinyin.STYLE_TONE});
  };
const Index = () => (
  <div>
    <textarea onChange={changee} id="input"></textarea>
    <h3 id="output"></h3>
  </div>
);

export default Index;
