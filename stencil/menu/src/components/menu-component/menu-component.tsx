import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'menu-component',
  styleUrl: 'menu-component.css',
  shadow: false
})

export class MenuComponent {

  @Prop() menuTitle: string;
  @State() toggle: boolean = false;
  @State() data: any;
  
  componentWillLoad() {
    this.data = {
        "items": [{
                "title": "Option 1",
                "href": "#"
              },
              {
                "title": "Option 2",
                "href": "#"
              },
              {
                "title": "Option 3",
                "href": "#"
              },
              {
                "title": "Option 4",
                "href": "#"
              }
          ]
    }
  }

  toggleMenu() {
    this.toggle = !this.toggle;
  }

  render() {
    return (
      <div id="menu" class={this.toggle? "" : "active"}>
        <button id="menu-btn" onClick={() => this.toggleMenu()}></button>
        <div class="container">
          <h3 class="title">{this.menuTitle}</h3>
          <ul>
            { this.data.items.map(item => <li><a href={item.href}>{item.title}</a></li>) }
          </ul>
          <button id="help-btn"><span class="far fa-life-ring"></span>Help Center</button>
        </div>
      </div> 
    );
  }
}
