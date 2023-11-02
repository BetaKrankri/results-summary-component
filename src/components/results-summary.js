import { LitElement, html, css } from "../../node_modules/lit";

export class ResultsSummary extends LitElement {
  static styles = [
    css`
      :host {
        --pale-blue: hsl(221, 100%, 96%);
        --light-lavender: hsl(241, 100%, 89%);
        --darkgray-blue: hsl(224, 30%, 27%);
        --lightslate-blue: hsl(252, 100%, 67%);
        --lightroyal-blue: hsl(241, 81%, 54%);
        --violet-blue: hsla(256, 72%, 46%, 1);
        --persian-blue: hsla(241, 72%, 46%, 0);
      }
    `,
    css`
      :host {
        box-sizing: border-box;
        background: white;
        display: flex;
        flex-wrap: wrap;
        font-family: "Hanken Grotesk";
        color: white;
      }
      .scores {
        box-sizing: border-box;
        margin: 0;
        padding: 16px 20px 20px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
      }
      .scores h3 {
        font-size: 18px;
        color: black;
        margin: 8px 0;
        padding: 0;
      }
      .continue {
        margin-top: 16px;
        box-sizing: border-box;
        border-radius: 999px;
        border: none;
        font-size: 18px;
        font-family: "Hanken Grotesk";
        padding: 16px 24px;
        width: 100%;
        color: white;
        background-color: var(--darkgray-blue);
      }
      .continue:hover {
        cursor: pointer;
        background: linear-gradient(
          to bottom,
          var(--lightslate-blue),
          var(--lightroyal-blue)
        );
      }
      .summary {
        box-sizing: border-box;
        padding: 20px 40px 40px;
        marding: 0;
        border-radius: 0 0 32px 32px;
        background: linear-gradient(
          to bottom,
          var(--lightslate-blue),
          var(--lightroyal-blue)
        );
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        max-width: 420px;
      }
      h1 {
        font-size: 18px;
        color: var(--light-lavender);
        margin-bottom: 24px;
      }
      .round {
        border-radius: 50%;
        width: 180px;
        height: 180px;
        background: linear-gradient(
          to bottom,
          var(--violet-blue),
          var(--persian-blue)
        );
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      #total-score {
        font-size: 80px;
        font-weight: bold;
        line-height: 1;
      }
      .tiny-blue {
        color: var(--light-lavender);
        opacity: 0.8;
      }
      h2 {
        font-size: 1.65em;
      }
      p {
        margin: 0;
        font-size: 18px;
        text-align: center;
        color: var(--light-lavender);
      }
      @media (min-width: 380px) {
        :host {
          max-width: 800px;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 16px 16px 32px -16px hsl(224, 30%, 27%);
          flex-wrap: nowrap;
        }
        .summary {
          border-radius: 32px;
          min-width: 300px;
        }
        h2 {
          font-size: 1.65em;
        }
        .scores {
          min-width: 300px;
        }
      }
    `,
  ];

  static properties = {
    data: { type: Array },
  };

  constructor() {
    super();
    this.data = [
      { category: "Reaction", score: 0 },
      { category: "Memory", score: 0 },
      { category: "Verbal", score: 0 },
      { category: "Visual", score: 0 },
    ];
  }

  render() {
    const scoresByCategory = this.data?.map(
      (ctg) =>
        html`<category-score
          score="${ctg.score}"
          category="${ctg.category.toLowerCase()}"
        ></category-score>`
    );

    const average = Math.floor(
      this.data.reduce((acc, curr) => acc + curr.score, 0) / this.data?.length
    );

    return html`
      <div class="summary">
        <h1>Your Result</h1>
        <div class="round">
          <span id="total-score">${average}</span>
          <span class="tiny-blue">of 100</span>
        </div>
        <h2>Great</h2>
        <p>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div class="scores">
        <h3>Summary</h3>
        ${scoresByCategory}
        <button class="continue">Continue</button>
      </div>
    `;
  }
}
customElements.define("results-summary", ResultsSummary);
