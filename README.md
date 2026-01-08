# EpiTrack-KE 🇰🇪

**A lightweight disease surveillance and epidemiological tracking system designed for the Kenyan public health context.**

---

## 🚨 Problem: Gaps in Public Health Surveillance

Public health surveillance in many low- and middle-income settings faces persistent challenges that limit timely response and effective decision-making:

* Delayed disease reporting and analysis
* Fragmented data across health facilities and programs
* Limited real-time visibility into emerging outbreaks
* Heavy reliance on manual or spreadsheet-based reporting
* Resource constraints that restrict adoption of advanced analytics

These gaps can slow outbreak detection, weaken coordination, and reduce the impact of public health interventions.

---

## 💡 Solution: EpiTrack-KE

**EpiTrack-KE** is a locally-focused epidemiological tracking platform built to support **early disease trend detection**, **centralized data aggregation**, and **data-informed decision-making**.

The system emphasizes:

* **Simplicity** – easy to deploy and use
* **Affordability** – suitable for resource-constrained settings
* **Local relevance** – aligned with Kenyan public health workflows

EpiTrack-KE is designed for use at **county and national levels**, with extensibility for future integrations and analytics.

---

## 🧠 Key Features

* Structured disease case data ingestion (CSV, API-ready)
* Epidemiological trend analysis and summary outputs
* Backend-ready architecture for dashboards and alerts
* Extensible design for future integration with DHIS2, laboratory systems, or mobile reporting tools

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express
* **Data Processing:** CSV parsing
* **Database:** MongoDB
* **Configuration Management:** dotenv
* **Version Control:** Git & GitHub

---

## ⚙️ How to Run Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/maureenrono-sys/EpiTrack-KE.git
cd EpiTrack-KE
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

```bash
cp .env.example .env
```

Update the `.env` file with your local configuration values.

### 4️⃣ Start the development server

```bash
npm run dev
```

---

## 🌍 Use Cases

* County and national disease surveillance units
* Public health research and analysis
* Epidemiology training and education
* Outbreak preparedness, monitoring, and response planning

---

## 📌 Project Status

EpiTrack-KE is under active development and is being built as a **portfolio-grade public health informatics project**, with planned expansion into data visualization dashboards and advanced analytics.

---

## 👤 Author

**Maureen Rono**
Public Health • Epidemiology • Health Informatics • Data & Systems Innovation


