import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import SearchInput from './components/SearchInput';
import ImageView from './components/ImageView';
import { AppState } from './components/ScrollElement';
import FadeInAnimation from './components/FadeInAnimation';
import { appStyles } from './components/Style';

/**
 * @class App
 * @description this class is the main class of the application
 * @since 12/11/2021
 * @author Gilles Cedric
 */
export default class App extends Component<{}, AppState> {

  /**
   * @constructor
   * @param props the default props of th application
   */
  constructor(props: {}) {
    super(props);
    this.state = {
      search: "",
      images: [],
      value: ""
    }
  }

  /**
   * @method onButtonPress
   * @description this method is used to handle a request to the remote API on the button press
   * @async
   * @returns void
   */
  onButtonPress = async () => {
    try {
      const response = await fetch('https://coffee.alexflipnote.dev/random.json');
      const json = await response.json();
      this.setState({ images: [...this.state.images, { key: this.state.search, value: json.file }] })
    } catch (error) {
      console.log(error)
    }
  }

  /**
   * @method handleSearch
   * @description this method is used modify the state when the text change in the input
   * @param {string} text
   * @returns void
   */
  handleSearch = (text: string) => {
    this.setState({ search: text })
  }

  /**
   * @method render
   * @override
   * @description this is the render method of the Component class
   */
  render() {
    return (
      <View style={appStyles.container} >
        <SearchInput text="Publier" onButtonPress={this.onButtonPress} onChangeText={this.handleSearch} />
        <ScrollView style={appStyles.scrollView} >
          {
            this.state.images.map((image, key) => (
              <FadeInAnimation delay={key * 100} key={key}>
                <ImageView text={image.key} img={image.value} key={key} number={key} />
              </FadeInAnimation>
            ))
          }
        </ScrollView>
        <StatusBar style="auto" />
      </View>
    );
  }

}