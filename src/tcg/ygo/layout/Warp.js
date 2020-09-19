define(["react", "react-class", "draw/Group", "./Kind.js", "./component/All"],
function Synchro(React, ReactClass, Group, Kind, C) {
	var Warp = ReactClass({
		render: function render()
		{
			return React.createElement(
				Group,
				this.props,
				React.createElement(C.Image, {
					value: this.props.image,
                    pendulum: this.props.pendulum.enabled,
                    rarity: this.props.rarity
				}),
				// React.createElement(C.Border, {
				//          value: "Warp", pendulum: this.props.pendulum.enabled
				// }),
				React.createElement(C.Border, {
					value: "Warp",
                    pendulum: false
				}),
				React.createElement(C.CardName, {
					value: this.props.name,
                    color: "white",
                    rarity: this.props.rarity
				}),
				React.createElement(C.Attribute, {
					value: this.props.attribute
				}),
				React.createElement(C.Level, {
					value: -this.props.level,
                    star: "Galaxy"
				}),

				React.createElement(C.Pendulum, this.props.pendulum),

				React.createElement(C.Type, {
					value: this.props.type
				}),
				React.createElement(C.Effect, {
					value: this.props.effect
				}),
				React.createElement(C.Atk, {
					value: this.props.atk
				}),
				React.createElement(C.Def, {
					value: this.props.def
				}),

				React.createElement(C.Serial, {
					value: this.props.serial, color: "white"
				}),
				React.createElement(C.Id, {
					value: this.props.id,
                    position: this.props.pendulum.enabled ? "pendulum" : "regular",
                    color: "white"
				}),
				React.createElement(C.Copyright, {
					value: this.props.copyright,
                    color: "white"
				}),

                React.createElement(C.CardHolo, {
					rarity: this.props.rarity
				}),
			);
		}
	});
	Warp.displayName = "Warp";
    Warp.kind = Kind.Monster;
	Warp.defaultProps = {
	};
    Warp.variants = [ "Normal" ];
    Warp.hasPendulum = false;
	return Warp;
});
