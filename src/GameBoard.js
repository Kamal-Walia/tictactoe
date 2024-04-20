import React from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import RnToast from 'rn-js-toast';

const Row = props => {
  const borderRightWidth =
    props.id === 2 || props.id === 5 || props.id === 8 ? 0 : 1;
  const borderBottomWidth =
    props.id === 6 || props.id === 7 || props.id === 8 ? 0 : 1;
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[{
        borderRightWidth: borderRightWidth,
        borderRightColor: props.colors.color,
        borderBottomWidth: borderBottomWidth,
        borderBottomColor: props.colors.color,
        width: '33%',
        paddingVertical: '15%',
        alignItems: 'center',
        justifyContent: 'center',
      }, props.colors]}
      onPress={() => props.setValue(props.id)}
      disabled={!!props.disabled}>
      <Text style={[{ fontSize: 28 }, props.colors, props.value === "X" ? {color:props.colorX} : {color:props.colorY}]}>{props.value}</Text>
    </TouchableOpacity>
  );
};

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    const { colors } = this.props.route.params;
    this.state = { gameBoard: Array(9).fill(null), previousTurn: 'X', colorX: colors.color, colorY: colors.color, isGameBoardDisabled:false };
    this.toastRef = null;
  }

  onSelectColorX = (color) => {
    this.setState({ colorX: color })
  };

  onSelectColorY = (color) => {
    this.setState({ colorY: color })
  };


  checkWinner = value => {
    let isWinner = false;
    if (
      this.state.gameBoard[6] === value &&
      this.state.gameBoard[4] === value &&
      this.state.gameBoard[2] === value
    ) {
      isWinner = true;
    } else if (
      this.state.gameBoard[2] === value &&
      this.state.gameBoard[5] === value &&
      this.state.gameBoard[8] === value
    ) {
      isWinner = true;
    } else if (
      this.state.gameBoard[0] === value &&
      this.state.gameBoard[4] === value &&
      this.state.gameBoard[8] === value
    ) {
      isWinner = true;
    } else if (
      this.state.gameBoard[0] === value &&
      this.state.gameBoard[1] === value &&
      this.state.gameBoard[2] === value
    ) {
      isWinner = true;
    } else if (
      this.state.gameBoard[3] === value &&
      this.state.gameBoard[4] === value &&
      this.state.gameBoard[5] === value
    ) {
      isWinner = true;
    } else if (
      this.state.gameBoard[6] === value &&
      this.state.gameBoard[7] === value &&
      this.state.gameBoard[8] === value
    ) {
      isWinner = true;
    } else if (
      this.state.gameBoard[0] === value &&
      this.state.gameBoard[3] === value &&
      this.state.gameBoard[6] === value
    ) {
      isWinner = true;
    } else if (
      this.state.gameBoard[1] === value &&
      this.state.gameBoard[4] === value &&
      this.state.gameBoard[7] === value
    ) {
      isWinner = true;
    }
    if (isWinner) {
      this.toastRef.show(`Winner is ${value}`, 1000, 'bottom');
      this.disableBoard()
      // this.resetBoard();
    } else if (this.state.gameBoard.filter(item => item != null).length === this.state.gameBoard.length) {
      this.toastRef.show(`Draw`, 1000, 'bottom');
      this.disableBoard()
      // this.resetBoard();
    }
  };

  disableBoard = () => {
    this.setState({isGameBoardDisabled:true})
  }

  resetBoard = () => {
    this.setState({ gameBoard: Array(9).fill(null), previousTurn: 'X', isGameBoardDisabled:false });
  };

  setValue = index => {
    const value = this.state.previousTurn === 'X' ? '0' : 'X';
    const array = this.state.gameBoard;
    array[index] = value;
    this.setState({ gameBoard: array, previousTurn: value }, () => {
      this.checkWinner(value);
    });
  };

  render() {
    const { colors } = this.props.route.params;
    return (
      <View style={[{ flex: 1 }, colors]}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate("Settings",
          {
            setColorX: this.onSelectColorX,
            setColorY: this.onSelectColorY,
            colorX: this.state.colorX,
            colorY: this.state.colorY
          }
        )}
          style={{ alignSelf: "flex-end", padding: 10, paddingBottom:0 }}>
          <Text style={[{ fontSize: 32 }, {color:colors.color}]}>⚙️</Text>
        </TouchableOpacity>
        <View
          style={[{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            paddingHorizontal: '10%',
            paddingVertical: '14%',
          }, colors]}>
          <Text style={[{ fontSize: 22 }, {color:colors.color}]}>{`Turn: ${this.state.previousTurn === 'X' ? '0' : 'X'
            }`}</Text>
          <View
            style={[{
              flex: 1,
              bordermWidth: 1,
              padding: 10,
              paddingTop:0,
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }, colors]}>
            <View style={[{ flexDirection: 'row', flexWrap: 'wrap', padding: 10 }, colors]}>
              {this.state.gameBoard.map((element, index) => {
                return (
                  <Row
                    key={index}
                    id={index}
                    setValue={this.setValue}
                    value={element}
                    colors={colors}
                    colorX={this.state.colorX}
                    colorY={this.state.colorY}
                    disabled={this.state.gameBoard[index] || this.state.isGameBoardDisabled}
                  />
                );
              })}
            </View>
          </View>
          <TouchableOpacity onPress={this.resetBoard}>
            <Text style={[{ fontSize: 22, borderBottomWidth: 1 }, {color:colors.color}]}>Reset</Text>
          </TouchableOpacity>
          <RnToast ref={toast => (this.toastRef = toast)} />
        </View>
      </View>
    );
  }
}

export default GameBoard;
