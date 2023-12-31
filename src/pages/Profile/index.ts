import Handlebars from "handlebars";

import "./Profile.less";
import Block from "../../core/Block";
import { ProfileContent } from "../../components/ProfileContent";
import { tmpl } from "./Profile.tmpl";

const profile = Handlebars.compile(tmpl);

export class Profile extends Block {
  constructor(props: {}) {
    const profileContent = new ProfileContent({});

    super( { profileContent, ...props });
  }

  render() {
    return this.compile(profile, this.props);
  }
}
