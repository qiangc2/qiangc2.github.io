### 7-3-3 Narrative visualization Essay
By Qiang Chen
Summer 2019

Please find the narrative visualization by clicking this link here (https://qiangc2.github.io)
Please find the narrative project files by clickling this link here(https://github.com/qiangc2/qiangc2.github.io)


### 1. The Narrative Visualization Message
The website is designed to find the relationship between the emissions of eehicles and the Horsepower for diffent type of vehicle based on our homework epa dataset. We want to create a narrative visualization to figout out which type of car is more environment friendly so that we could suggest people on their next car. By obsersing the plot with with x as horsepower and y as CO2 Emissions, the reader could find the trend of the CO2 emission for different type of vehicles as horsepower increse.


### 2. The Narrative Structure  
I selected the interactive slideshow as my structure.  It includes total three slides.  The ordering used is the random-access since there are three scene tab the reader could visit based on their preference. The visualization is based on a dataset from the Environment Protection Agency which contains horsepower, CO2 emission and vehicle type information of 4,411 vehicles manufactured in 2015. By looking at the circles on the plot, reader could find the allocation of the each vehicle in the axis with x as horsepower and y as CO2 Emissions.


### 3. The Visual Structure  
As to the visual strcture, we put the title as most above. Then we created scene tabs for navigation under the title. Then below the scene tabs navigation is the actual plot we create for analysis.  

The reader could access to the full dataset and the highlight data based on a categorical variable. In the plot, we created x and y axis and the highlighted the circles(dots) to represent each vehicle. We also highlighted the circles different colors to represent different type of vehicles. Transition occurs when the reader click on different scece tab on the navigation at the left corner of the visualization. Eventhrough the reader could see the scence on any sequency, we still numebr the scence with numerial reference for a suggested sequence. 

In each scence, we shows a message in the spare place within the plot to deliver our analysis message. Furhtermore, the reader could make the plot only show one color circles(one type of vehicles) by clicking one specfic color circle.  


### 4. Scenes
There are three scenes in the narrative visualization. They follow the same template and layout for visual consistency as described below. 
(1) The project title is fixed in place above the visualization container for the duration of the narrative visualization.
(2) The visualization container which displays the data and is consistent with height 510px, width 980px, and background color "grey" for the duration of the narrative visualization.
(3) The plot axes and legend are consistent for the duration of the narrative visualization. The axes are linear and extend the range of the data.
(4) The marks are circular and consistent in size and color for the duration of the narrative visualization.
(5) The scenes were designed for consistency to keep the viewer from getting disoriented through transitions.

The order of the scenes were selected to first highlight the overall trend of the data in scene 1, second to explore that trend in scene 2 according to the categorical variable vehicle "type" and see that even among different vehicles types the trend is consistent, and finally in scene 3 ask the user to reflect on this trend and perhaps consider it when making his/her next vehicle purchase.


### 5. Annotations
Based on the course material, annotations are used to highlight a trend in the data, direct the user to further investigate the data, and ask the user to draw a conclusion from the data. The annotations use a consistent template for font size and a bolded style.

In my visualizaton, the annotation in Scene 1 is text positioned inside the visualization container meant to highlight the primary finding of the visualization. The message is "As we can see CO2 emissions increase for all vehicle types as horsepower increases" When the user clicks the button to transition forward to Scene 2 or Scene 3 the annotation for Scene 1 is disappeared.

Similarly, the annotation in Scene 2 is text positioned inside the visualization container meant to highlight the possibility of user engagement with the data. The message is "Click different color circle to show the trends for one type of vehicle". The user is encouraged to click the data to see the trends for Cars, Trucks or SUVs respectively. When the user clicks the button to navigate back to Scene 1 or forward to Scene 3 the annotation for Scene 2 is disappeared.

Similarly, the annotation in Scene 3 is text positioned inside the visualization container meant to ask the user to reflect on what has been discovered in this narrative visualization and to consider this information when making his next vehicle purchase. The text massage is "We can not tell that Cars always emit less CO2 than Truck, But obvisously powerless vehicles can emit less CO2" When the user clicks the button to navigate back to Scene 1 or to Scene 2 the annotation for Scene 3 is disappeared.

Finally, I created a Project Essay tab to present this essay to diliver the details of this visualiztion for the reader.When the user clicks the button, it will direct to the github readme file.


### 6. Parameters
Based on the course material, parameters are used to engage the user in the narrative visualization and further explore the data. In this visualization, the parameter is the categorical variable vehicle "type". The user are able to examine the data of one vehicle type at a time (Car, Truck or SUV) by clicking over any data circles(dots) belonging to that specific vehicle type. This allows the user to obtain further information about the relationship between horsepower and CO2 output, not only as an overall trend, but also based on specific vehicle type. 

Specifically, the current state is controlled by this parameter vehicle "type". When we clicks over one color circles(dots) belonging to a particular vehicle type, the current state changes and the other color circles belonging to the other vehicle types are set to be almost transparent. When clicking off this one color circles(dots), the current state changes again and the opacity for all data points for all vehicle types returns to 1.


### 7.Triggers
Based on the course material, triggers are utilized in two ways for this visualization.In this project, the buttons along the top of the visualization container are triggers to change scenes. The buttons are labelled such that their functions are made to be obvious: "Scene 1", "Scene 2", "Scene-3" and "Projet Essay".

The user event of clicking one of these buttons changes the current state of the visualization by changing the visualization scene. Affordance is used such that the button that represents the current state of the visualization is displayed with an increased brightness. When the user mouses over the other buttons they become temporarily highlighted which indicates to the user that they could be clicked. Upon clicking a button this triggers a change to the corresponding scene being displayed.

We also used triggers within the data circles(dots).The user event of "mouse over" a data point changes the current state of the chart, which applies an opacity of 0.05 to all other circles not part of the vehicle type that is currently moused over. The user event of "mouse off" changes the current state of the chart by returning the opacity of all data points back to original 1. This capability for the user event associated with data mouse over is communicated with an annotation.


### 8. References
Instructions on how to use github to host a website
https://pages.github.com/




