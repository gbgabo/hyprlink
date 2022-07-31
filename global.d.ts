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

type ProfileComponent = {
  name: string;
  address: string | undefined;
  image: string;
  display: boolean;
  displayName: boolean;
};

type Component =
  | LinkComponent
  | PanelComponent
  | SectionComponent
  | IconComponent
  | ProfileComponent;

type Styles = object;

type Page = {
  title: string;
  components: Component[];
  styles: Styles;
};
