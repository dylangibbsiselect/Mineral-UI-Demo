import React from "react";
import { render } from "react-dom";
import { createTheme, ThemeProvider } from "mineral-ui/themes";
import Flex, { FlexItem } from "mineral-ui/Flex";
import IconCloud from "mineral-ui-icons/IconInfoOutline";
import Button from "mineral-ui/Button";
import Checkbox from "mineral-ui/Checkbox";
import { CheckboxGroup } from "mineral-ui/Checkbox";
import Radio from "mineral-ui/Radio";
import { RadioGroup } from "mineral-ui/Radio";
import Select from "mineral-ui/Select";
import Dropdown from "mineral-ui/Dropdown";
import TextInput from "mineral-ui/TextInput";

const brandOrange = {
  [10]: "#fff0e0",
  [20]: "#ffd4a8",
  [30]: "#ffb870",
  [40]: "#ff9c38",
  [50]: "#ff7f00",
  [60]: "#e66b00",
  [70]: "#a44e00",
  [80]: "#833d00",
  [90]: "#5b2b00",
  [100]: "#391b00",
  inflection: 40
};

const brandTeal = {
  [10]: "#f5fffe",
  [20]: "#beebe6",
  [30]: "#93d9d2",
  [40]: "#6dc7be",
  [50]: "#4db6ac",
  [60]: "#359c91",
  [70]: "#228278",
  [80]: "#136960",
  [90]: "#084f48",
  [100]: "#013630",
  inflection: 40
};

const brandGrey = {
  [10]: "#fcfcfc",
  [20]: "#e6e6e6",
  [30]: "#cfcfcf",
  [40]: "#b8b8b8",
  [50]: "#a1a1a1",
  [60]: "#8a8a8a",
  [70]: "#737373",
  [80]: "#5c5c5c",
  [90]: "#464646",
  [100]: "#2e2e2e",
  inflection: 40
};

const brandRed = {
  [10]: "#f9f0ee",
  [20]: "#f8b9ab",
  [30]: "#f47f62",
  [40]: "#e2583f",
  [50]: "#d93900",
  [60]: "#c11e04",
  [70]: "#9a1700",
  [80]: "#751000",
  [90]: "#520d00",
  [100]: "#340700",
  inflection: 40
};

const brandTheme = createTheme({
  colors: {
    theme: brandGrey,
    success: brandTeal,
    warning: brandOrange,
    danger: brandRed
  },
  overrides: {
    fontFamily: "Proxima Nova",
    fontSize_base: "18px",
    Button_borderRadius: "40px",
    Button_boxShadow_focus: "0 0 0 1px white, 0 0 0 4px black",
    Button_paddingHorizontal: ".75em"
  }
});

const icon = <IconCloud />;

const selectdata = [
  {
    text: "Build",
    value: "basic"
  },
  {
    text: "Wonder",
    value: "iconStart"
  },
  {
    text: "The Boardroom",
    value: "iconEnd"
  },
  {
    text: "Unite",
    onClick: () => {
      console.log("onClick is not triggered for disabled MenuItems");
    },
    disabled: true,
    value: "disabled"
  },
  {
    group: true,
    title: "Boost Group"
  },
  {
    text: "Pioneer",
    value: "success"
  },
  {
    text: "Participate",
    value: "warning"
  },
  {
    text: "Achieve",
    value: "danger"
  }
];

const selectdatafancy = [
  { text: "Menu item", secondaryText: "Secondary text", value: "basic" },
  {
    text: "Icon at start",
    iconStart: <IconCloud />,
    value: "iconStart"
  },
  {
    text: "Icon at end",
    iconEnd: <IconCloud />,
    value: "iconEnd"
  },
  {
    divider: true
  },
  {
    text: "Disabled menu item",
    onClick: () => {
      console.log("onClick is not triggered for disabled MenuItems");
    },
    disabled: true,
    value: "disabled"
  },
  {
    group: true,
    title: "Group Title"
  },
  {
    text: "Success variant",
    value: "success",
    variant: "success"
  },
  {
    text: "Warning variant",
    value: "warning",
    variant: "warning"
  },
  {
    text: "Danger variant",
    value: "danger",
    variant: "danger"
  }
];

const App = () => (
  <Flex wrap gutterWidth="lg">
    <FlexItem>
      <Button primary>ButtonPrimaryDefault</Button>
    </FlexItem>
    <FlexItem>
      <Button variant="success" primary>
        ButtonPrimarySuccess
      </Button>
    </FlexItem>
    <FlexItem>
      <Button variant="warning" primary>
        ButtonPrimaryWarning
      </Button>
    </FlexItem>
    <FlexItem>
      <Button variant="danger" primary>
        ButtonPrimaryDanger
      </Button>
    </FlexItem>
    <FlexItem>
      <Button primary disabled>
        ButtonPrimaryDisabled
      </Button>
    </FlexItem>
    <FlexItem>
      <Button>ButtonDefaultDefault</Button>
    </FlexItem>
    <FlexItem>
      <Button variant="success">ButtonDefaultSuccess</Button>
    </FlexItem>
    <FlexItem>
      <Button variant="warning">ButtonDefaultWarning</Button>
    </FlexItem>
    <FlexItem>
      <Button variant="danger">ButtonDefaultDanger</Button>
    </FlexItem>
    <FlexItem>
      <Button disabled>ButtonDefaultDisabled</Button>
    </FlexItem>
    <FlexItem>
      <Button minimal>ButtonMinimalDefault</Button>
    </FlexItem>
    <FlexItem>
      <Button variant="success" minimal>
        ButtonMinimalSuccess
      </Button>
    </FlexItem>
    <FlexItem>
      <Button variant="warning" minimal>
        ButtonMinimalWarning
      </Button>
    </FlexItem>
    <FlexItem>
      <Button variant="danger" minimal>
        ButtonMinimalDanger
      </Button>
    </FlexItem>
    <FlexItem>
      <Button minimal disabled>
        ButtonMinimalDisabled
      </Button>
    </FlexItem>
    <FlexItem>
      <Button iconStart={icon}>ButtonMinimalDefaultIconStart</Button>
    </FlexItem>
    <FlexItem>
      <Button variant="success" iconEnd={icon} minimal>
        ButtonMinimalSuccessIconEnd
      </Button>
    </FlexItem>
    <FlexItem>
      <Button variant="warning" iconStart={icon} iconEnd={icon} primary>
        ButtonPrimaryWarningIconBoth
      </Button>
    </FlexItem>
    <FlexItem>
      <Button variant="danger" iconStart={icon} minimal />
    </FlexItem>
    <FlexItem>
      <Button variant="success" iconStart={icon} primary />
    </FlexItem>
    <FlexItem>
      <Button iconStart={icon} circular />
    </FlexItem>
    <FlexItem>
      <Button variant="warning" iconStart={icon} primary circular />
    </FlexItem>
    <FlexItem>
      <Button size="small" primary>
        ButtonPrimaryDefaultSmall
      </Button>
    </FlexItem>
    <FlexItem>
      <Button variant="warning" size="medium" minimal>
        ButtonMinimalWarningMedium
      </Button>
    </FlexItem>
    <FlexItem>
      <Button variant="success" primary>
        ButtonPrimarySuccessLarge
      </Button>
    </FlexItem>
    <FlexItem>
      <Button size="jumbo">ButtonDefaultDefaultJumbo</Button>
    </FlexItem>
    <FlexItem>
      <Checkbox
        name="minerals"
        label="CheckboxUncontrolledChecked"
        value="quartz"
        defaultChecked
      />
    </FlexItem>
    <FlexItem>
      <Checkbox
        name="minerals"
        label="CheckboxUncontrolledChecked"
        value="quartz"
        defaultChecked
      />
    </FlexItem>
    <FlexItem>
      <Checkbox name="minerals" label="CheckboxUncontrolled" value="quartz2" />
    </FlexItem>
    <FlexItem>
      <Checkbox
        name="minerals"
        label="CheckboxDisabled"
        value="quartz2"
        disabled
      />
    </FlexItem>
    <FlexItem>
      <Checkbox
        name="minerals"
        label="CheckboxLabelLeft"
        value="magnetite"
        labelPosition="start"
      />
    </FlexItem>
    <FlexItem>
      <Checkbox
        size="small"
        name="minerals"
        label="CheckboxSmall"
        value="quartz"
        defaultChecked
      />
    </FlexItem>
    <FlexItem>
      <Checkbox
        size="medium"
        name="minerals"
        label="CheckboxMedium"
        value="quartz"
        defaultChecked
      />
    </FlexItem>
    <FlexItem>
      <Checkbox
        name="minerals"
        label="CheckboxLarge"
        value="quartz"
        defaultChecked
      />
    </FlexItem>
    <FlexItem>
      <Checkbox
        size="jumbo"
        name="minerals"
        label="CheckboxJumbo"
        value="quartz"
        defaultChecked
      />
    </FlexItem>
    <FlexItem>
      <CheckboxGroup
        name="minerals-1"
        defaultChecked={["magnetite", "quartz"]}
        data={[
          { label: "CheckboxGroup1", value: "fluorite" },
          { label: "CheckboxGroup2", value: "magnetite" },
          { label: "CheckboxGroup3", value: "quartz" }
        ]}
      />
    </FlexItem>
    <FlexItem>
      <Radio
        name="minerals"
        label="RadioUncontrolledChecked"
        value="quartz"
        defaultChecked
      />
    </FlexItem>
    <FlexItem>
      <Radio name="minerals" label="RadioUncontrolled" value="quartz2" />
    </FlexItem>
    <FlexItem>
      <Radio name="minerals" label="RadioDisabled" value="quartz2" disabled />
    </FlexItem>
    <FlexItem>
      <Radio
        name="minerals"
        label="RadioLabelLeft"
        value="magnetite"
        labelPosition="start"
      />
    </FlexItem>
    <FlexItem>
      <Radio
        size="small"
        name="minerals"
        label="RadioSmall"
        value="quartz"
        defaultChecked
      />
    </FlexItem>
    <FlexItem>
      <Radio
        size="medium"
        name="minerals"
        label="RadioMedium"
        value="quartz"
        defaultChecked
      />
    </FlexItem>
    <FlexItem>
      <Radio name="minerals" label="RadioLarge" value="quartz" defaultChecked />
    </FlexItem>
    <FlexItem>
      <Radio
        size="jumbo"
        name="minerals"
        label="RadioJumbo"
        value="quartz"
        defaultChecked
      />
    </FlexItem>
    <FlexItem>
      <RadioGroup
        name="minerals-1"
        defaultChecked={["magnetite", "quartz"]}
        data={[
          { label: "RadioGroup1", value: "fluorite" },
          { label: "RadioGroup2", value: "magnetite" },
          { label: "RadioGroup3", value: "quartz" }
        ]}
      />
    </FlexItem>
    <FlexItem>
      <Select data={selectdata} placeholder="SelectDefault" />
    </FlexItem>
    <FlexItem>
      <Select
        data={selectdata}
        variant="success"
        placeholder="SelectDefaultSuccess"
      />
    </FlexItem>
    <FlexItem>
      <Select
        data={selectdata}
        variant="warning"
        placeholder="SelectDefaultWarning"
      />
    </FlexItem>
    <FlexItem>
      <Select
        data={selectdata}
        variant="danger"
        placeholder="SelectDefaultDanger"
      />
    </FlexItem>
    <FlexItem>
      <Select data={selectdata} placeholder="SelectDefaultDisabled" disabled />
    </FlexItem>
    <FlexItem>
      <Select data={selectdata} size="small" placeholder="SelectDefaultSmall" />
    </FlexItem>
    <FlexItem>
      <Select
        data={selectdata}
        size="medium"
        placeholder="SelectDefaultMedium"
      />
    </FlexItem>
    <FlexItem>
      <Select data={selectdata} placeholder="SelectDefaultLarge" />
    </FlexItem>
    <FlexItem>
      <Select data={selectdata} size="jumbo" placeholder="SelectDefaultJumbo" />
    </FlexItem>
    <FlexItem>
      <Select data={selectdatafancy} placeholder="SelectFancy" />
    </FlexItem>
    <FlexItem>
      <Dropdown data={selectdata}>
        <Button>DropdownDefault</Button>
      </Dropdown>
    </FlexItem>
    <FlexItem>
      <Dropdown data={selectdata} disabled>
        <Button>DropdownDisabled</Button>
      </Dropdown>
    </FlexItem>
    <FlexItem>
      <Dropdown wide data={selectdata}>
        <Button>DropdownWide</Button>
      </Dropdown>
    </FlexItem>
    <FlexItem>
      <TextInput defaultValue="TextInputDefault" />
    </FlexItem>
    <FlexItem>
      <TextInput defaultValue="TextInputDisabled" disabled />
    </FlexItem>
    <FlexItem>
      <TextInput defaultValue="TextInputReadOnly" readOnly />
    </FlexItem>
    <FlexItem>
      <TextInput placeholder="TextInputPlaceholder" />
    </FlexItem>
    <FlexItem>
      <TextInput variant="success" defaultValue="TextInputSuccess" />
    </FlexItem>
    <FlexItem>
      <TextInput variant="warning" defaultValue="TextInputWarning" />
    </FlexItem>
    <FlexItem>
      <TextInput variant="danger" defaultValue="TextInputDanger" />
    </FlexItem>
    <FlexItem>
      <TextInput size="small" defaultValue="TextInputSmall" />
    </FlexItem>
    <FlexItem>
      <TextInput size="medium" defaultValue="TextInputMedium" />
    </FlexItem>
    <FlexItem>
      <TextInput size="jumbo" defaultValue="TextInputJumbo" />
    </FlexItem>
    <FlexItem />
    <FlexItem />
    <FlexItem />
    <FlexItem />
    <FlexItem />
    <FlexItem />
    <FlexItem />
  </Flex>
);

render(
  <ThemeProvider theme={brandTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
