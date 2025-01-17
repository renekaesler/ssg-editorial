export default ({ items }, slots, { url }) => html`
  <nav id="menu">
    <header class="major">
      <h2>Menu</h2>
    </header>
    <ul>
      ${items.map(
        ({ href, name }) => html`
          <li>
            <a class=${{ active: url.pathname === href }} href="${href}">
              ${name}
            </a>
          </li>
        `
      )}

      <li>
        <span class="opener">Submenu</span>
        <ul>
          <li><a href="#">Lorem Dolor</a></li>
          <li><a href="#">Ipsum Adipiscing</a></li>
          <li><a href="#">Tempus Magna</a></li>
          <li><a href="#">Feugiat Veroeros</a></li>
        </ul>
      </li>
      <li><a href="#">Etiam Dolore</a></li>
      <li><a href="#">Adipiscing</a></li>
      <li>
        <span class="opener">Another Submenu</span>
        <ul>
          <li><a href="#">Lorem Dolor</a></li>
          <li><a href="#">Ipsum Adipiscing</a></li>
          <li><a href="#">Tempus Magna</a></li>
          <li><a href="#">Feugiat Veroeros</a></li>
        </ul>
      </li>
      <li><a href="#">Maximus Erat</a></li>
      <li><a href="#">Sapien Mauris</a></li>
      <li><a href="#">Amet Lacinia</a></li>
    </ul>
  </nav>
`;

style.scoped.scss`
  @import "utils.scss";

  #menu {
    ul {
      @include vendor("user-select", "none");
      color: _palette(fg-bold);
      font-family: _font(family-heading);
      font-weight: _font(weight-heading-alt);
      letter-spacing: _font(kerning-heading);
      list-style: none;
      margin-bottom: 0;
      padding: 0;
      text-transform: uppercase;

      a,
      span {
        border-bottom: 0;
        color: inherit;
        cursor: pointer;
        display: block;
        font-size: 0.9em;
        padding: 0.625em 0;

        &:hover,
        &.active {
          color: _palette(accent);
        }

        &.opener {
          @include vendor(
            "transition",
            "color #{_duration(transition)} ease-in-out"
          );
          @include icon(false, solid);
          -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
          position: relative;

          &:before {
            @include vendor(
              "transition",
              (
                "color #{_duration(transition)} ease-in-out",
                "transform #{_duration(transition)} ease-in-out"
              )
            );
            color: _palette(fg-light);
            content: "\f078";
            position: absolute;
            right: 0;
          }

          &:hover {
            &:before {
              color: _palette(accent);
            }
          }

          &.active {
            & + ul {
              display: block;
            }

            &:before {
              @include vendor("transform", "rotate(-180deg)");
            }
          }
        }
      }
    }

    > ul {
      > li {
        border-top: solid 1px _palette(border);
        margin: 0.5em 0 0 0;
        padding: 0.5em 0 0 0;

        > ul {
          color: _palette(fg-light);
          display: none;
          margin: 0.5em 0 1.5em 0;
          padding-left: 1em;

          a,
          span {
            font-size: 0.8em;
          }

          > li {
            margin: 0.125em 0 0 0;
            padding: 0.125em 0 0 0;
          }
        }

        &:first-child {
          border-top: 0;
          margin-top: 0;
          padding-top: 0;
        }
      }
    }
  }
`;
