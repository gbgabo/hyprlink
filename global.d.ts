type LinkComponent = {
  icon: string;
  name: string;
  type: "link";
  address: string;
};

type PanelComponent = {
  icon: string;
  name: string;
  type: "panel";
  details: string;
};

type SectionComponent = {
  icon: string;
  name: string;
  type: "section";
};

type IconComponent = {
  icon: string;
  name: string;
  address: string;
  type: "icon";
};

type Component =
  | LinkComponent
  | PanelComponent
  | SectionComponent
  | IconComponent
  | ProfileComponent;

type Styles = object[string];

interface Page {
  title: string;
  components: Component[];
  styles: Styles;
}
