import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
} from '@ionic/react';
import React, { useState } from 'react';
import BiorhythmCard from './components/BiorhthymCard';
import { useLocalStorage } from './hooks';

// app component
function App() {
  const [birthDate, setBirthDate] = useLocalStorage('birthDate', '');
  const [targetDate, setTargetDate] = useState(new Date().toISOString());
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {birthDate &&
        <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
        }
        <IonItem>
          <IonLabel position="stacked">Date of Birth:</IonLabel>
          <IonDatetime value={birthDate}
          onIonChange={(event) => setBirthDate(event.detail.value)}/>
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Target Date:</IonLabel>
          <IonDatetime value={targetDate}
          onIonChange={(event) => setTargetDate(event.detail.value)}/>
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
