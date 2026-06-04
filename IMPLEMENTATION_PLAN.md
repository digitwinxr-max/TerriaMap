# DigiTwin XR Infrastructure Intelligence Platform
## Implementation Plan - TRL4 SBIF Prototype

---

## 1. Data Schema Specification

### 1.1 CSV Schema - Common Fields

All CSV datasets share these core fields:

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| asset_id | String | Unique identifier | `BWA-001` |
| asset_name | String | Official asset name | `Jwaneng Mine` |
| country | String | ISO country code | `Botswana` |
| sector | String | Industry sector | `Mining` |
| latitude | Float | WGS84 decimal degrees | `-24.4775` |
| longitude | Float | WGS84 decimal degrees | `24.5969` |
| health_score | Integer | Asset condition (0-100) | `85` |
| risk_score | Float | Risk level (0.0-1.0) | `0.35` |
| investment_priority | Integer | Priority rank (1-10) | `7` |

### 1.2 AI Recommendations Schema

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| recommendation_id | String | Unique identifier | `AI-001` |
| asset_name | String | Target asset | `Morupule B Power Station` |
| country | String | Location | `Botswana` |
| sector | String | Industry sector | `Energy` |
| health_score | Integer | Current condition | `72` |
| risk_score | Float | Risk level | `0.45` |
| investment_priority | Integer | Priority rank | `8` |
| ai_recommendation | String | AI-generated insight | `Increase renewable integration...` |

### 1.3 GeoJSON Schema - Climate Risk Zones

All GeoJSON features share these properties:

| Field | Type | Description | Example |
|-------|------|-------------|---------|
| id | String | Unique identifier | `flood-001` |
| name | String | Zone name | `Okavango Delta` |
| risk_type | String | Risk category | `flood` |
| risk_level | String | Severity | `high` |
| severity_score | Integer | Numeric severity (0-100) | `78` |
| affected_area_km2 | Float | Area coverage | `28000` |
| population_affected | Integer | At-risk population | `150000` |
| primary_hazards | String | Main hazards | `seasonal_flooding` |

---

## 2. Final File Structure

```
wwwroot/
├── data/
│   ├── regional_assets.csv          (8 assets)
│   ├── energy_assets.csv            (5 assets)
│   ├── mining_assets.csv            (5 assets)
│   ├── ict_assets.csv               (5 assets)
│   ├── ai_recommendations.csv       (7 recommendations)
│   ├── flood_risk.geojson           (3 features)
│   ├── drought_risk.geojson         (3 features)
│   └── heat_stress.geojson          (3 features)
├── init/
│   └── init.json                   (replaces simple.json)
├── images/
│   └── dig twin_logo.png            (to be added)
├── favicons/
│   └── (update manifest.json)
└── config.json                      (branding update)
```

**Total: 10 data files + 1 catalog file = 11 new/modified files**

---

## 3. Asset Inventory by Country

### 3.1 Botswana (10 assets)

| ID | Name | Sector | Lat | Lon | Health | Risk | Priority |
|----|------|--------|-----|-----|--------|------|----------|
| BWA-001 | Morupule B Power Station | Energy | -22.65 | 26.83 | 72 | 0.45 | 8 |
| BWA-002 | Jwaneng Mine | Mining | -24.48 | 24.60 | 88 | 0.25 | 5 |
| BWA-003 | Kazungula Bridge | Regional | -17.79 | 25.26 | 92 | 0.15 | 4 |
| BWA-004 | Sir Seretse Khama International Airport | Regional | -24.96 | 25.92 | 85 | 0.28 | 5 |
| BWA-005 | Botswana Fibre Backbone Node | ICT | -24.63 | 25.92 | 78 | 0.35 | 6 |
| BWA-006 | Orapa Mine | Mining | -21.53 | 25.52 | 82 | 0.30 | 6 |
| BWA-007 | Morupule Coal Mine | Mining | -22.58 | 26.88 | 75 | 0.40 | 7 |
| BWA-008 | Gaborone Dam | Regional | -24.71 | 25.88 | 68 | 0.52 | 7 |
| BWA-009 | Botswana Innovation Hub | ICT | -24.65 | 25.90 | 80 | 0.32 | 5 |
| BWA-010 | Diamond Industrial Complex | Mining | -22.10 | 26.20 | 86 | 0.22 | 4 |

### 3.2 Namibia (10 assets)

| ID | Name | Sector | Lat | Lon | Health | Risk | Priority |
|----|------|--------|-----|-----|--------|------|----------|
| NAM-001 | Walvis Bay Port | Regional | -22.95 | 14.51 | 90 | 0.18 | 5 |
| NAM-002 | Husab Mine | Mining | -22.95 | 14.83 | 87 | 0.24 | 5 |
| NAM-003 | Green Hydrogen Zone | Energy | -22.85 | 17.08 | 65 | 0.55 | 9 |
| NAM-004 | Hosea Kutako International Airport | Regional | -22.48 | 17.47 | 88 | 0.20 | 4 |
| NAM-005 | Namibia Internet Exchange Node | ICT | -22.57 | 17.08 | 82 | 0.28 | 5 |
| NAM-006 | Lüderitz Bay | Regional | -26.65 | 15.15 | 72 | 0.42 | 7 |
| NAM-007 | Skorpion Zinc Mine | Mining | -28.53 | 16.23 | 79 | 0.35 | 6 |
| NAM-008 | NamPower Headquarters | ICT | -22.57 | 17.08 | 84 | 0.26 | 5 |
| NAM-009 | Swakopmund Desalination | Regional | -22.68 | 14.53 | 76 | 0.38 | 6 |
| NAM-010 | Otjiwarongo Data Center | ICT | -20.44 | 16.24 | 70 | 0.48 | 8 |

### 3.3 South Africa (10 assets)

| ID | Name | Sector | Lat | Lon | Health | Risk | Priority |
|----|------|--------|-----|-----|--------|------|----------|
| ZAF-001 | Koeberg Nuclear Power Station | Energy | -33.68 | 18.43 | 78 | 0.38 | 7 |
| ZAF-002 | Sishen Mine | Mining | -27.67 | 23.01 | 84 | 0.30 | 5 |
| ZAF-003 | OR Tambo International Airport | Regional | -25.92 | 28.24 | 90 | 0.15 | 4 |
| ZAF-004 | Teraco Data Centre | ICT | -26.10 | 28.22 | 95 | 0.08 | 3 |
| ZAF-005 | Saldanha Bay Port | Regional | -33.01 | 17.94 | 87 | 0.22 | 5 |
| ZAF-006 | Medupi Power Station | Energy | -23.68 | 27.45 | 65 | 0.52 | 9 |
| ZAF-007 | Richards Bay Port | Regional | -28.78 | 32.04 | 88 | 0.20 | 4 |
| ZAF-008 | Mogale AI Innovation Hub | ICT | -26.12 | 27.47 | 72 | 0.42 | 7 |
| ZAF-009 | Platinum Belt Mines | Mining | -25.50 | 27.30 | 80 | 0.35 | 6 |
| ZAF-010 | Cape Town Data Center | ICT | -33.87 | 18.50 | 92 | 0.12 | 4 |

---

## 4. Climate Risk Zones

### 4.1 Flood Risk Zones

| ID | Name | Coordinates | Risk Level | Severity |
|----|------|-------------|------------|----------|
| FLOOD-001 | Okavango Delta | [[21, -18], [24, -18], [24, -20], [21, -20]] | High | 82 |
| FLOOD-002 | Cuvelai Basin | [[15, -17], [18, -17], [18, -19], [15, -19]] | Medium | 65 |
| FLOOD-003 | KwaZulu-Natal Coastal | [[30, -28], [33, -28], [33, -31], [30, -31]] | High | 75 |

### 4.2 Drought Risk Zones

| ID | Name | Coordinates | Risk Level | Severity |
|----|------|-------------|------------|----------|
| DROUGHT-001 | Kgalagadi Region | [[21, -22], [24, -22], [24, -25], [21, -25]] | High | 78 |
| DROUGHT-002 | Central Namibia | [[16, -20], [20, -20], [20, -24], [16, -24]] | Medium | 62 |
| DROUGHT-003 | Northern Cape | [[20, -28], [24, -28], [24, -32], [20, -32]] | High | 70 |

### 4.3 Heat Stress Zones

| ID | Name | Coordinates | Risk Level | Severity |
|----|------|-------------|------------|----------|
| HEAT-001 | Gaborone Growth Corridor | [[25.8, -25.0], [26.1, -25.0], [26.1, -25.3], [25.8, -25.3]] | Medium | 58 |
| HEAT-002 | Windhoek Region | [[17.0, -22.4], [17.4, -22.4], [17.4, -22.7], [17.0, -22.7]] | Medium | 55 |
| HEAT-003 | Gauteng Urban Cluster | [[27.8, -26.0], [28.5, -26.0], [28.5, -26.5], [27.8, -26.5]] | High | 72 |

---

## 5. AI Recommendations

| ID | Asset Name | Country | Sector | Health | Risk | Priority | Recommendation |
|----|------------|---------|--------|--------|------|----------|----------------|
| AI-001 | Morupule B Power Station | Botswana | Energy | 72 | 0.45 | 8 | Implement predictive maintenance and hybrid solar integration to reduce emissions by 35% and improve reliability to 95%. |
| AI-002 | Green Hydrogen Zone | Namibia | Energy | 65 | 0.55 | 9 | Accelerate infrastructure investment and establish regulatory framework to capture 15% of global green hydrogen market by 2030. |
| AI-003 | Medupi Power Station | South Africa | Energy | 65 | 0.52 | 9 | Deploy advanced emissions monitoring and explore conversion to gas-ammonia co-firing for 40% carbon reduction. |
| AI-004 | Koeberg Nuclear Power Station | South Africa | Energy | 78 | 0.38 | 7 | Extend operational license to 2040 and integrate advanced safety monitoring systems for continued safe operation. |
| AI-005 | Jwaneng Mine | Botswana | Mining | 88 | 0.25 | 5 | Implement autonomous vehicle fleet and AI-driven ore sorting to increase recovery rate by 12%. |
| AI-006 | Walvis Bay Port | Namibia | Regional | 90 | 0.18 | 5 | Expand logistics handling capacity and strengthen corridor connectivity to Southern Africa landlocked states. |
| AI-007 | Teraco Data Centre | South Africa | ICT | 95 | 0.08 | 3 | Deploy renewable microgrid support and digital twin monitoring to maintain 99.999% uptime target. |

---

## 6. Catalog Structure (init.json)

```json
{
  "homeCamera": {
    "north": -17,
    "east": 32,
    "south": -35,
    "west": 11
  },
  "catalog": [
    {
      "id": "dig twin-platform",
      "type": "group",
      "name": "DigiTwin XR Infrastructure Intelligence",
      "members": [
        {
          "id": "climate-intelligence",
          "type": "group",
          "name": "Climate Intelligence",
          "members": [
            { "id": "flood-risk", "type": "geojson", "name": "Flood Risk Zones", "url": "data/flood_risk.geojson" },
            { "id": "drought-risk", "type": "geojson", "name": "Drought Risk Zones", "url": "data/drought_risk.geojson" },
            { "id": "heat-stress", "type": "geojson", "name": "Heat Stress Zones", "url": "data/heat_stress.geojson" }
          ]
        },
        {
          "id": "regional-infrastructure",
          "type": "group",
          "name": "Regional Infrastructure Twin",
          "members": [
            { "id": "regional-assets", "type": "csv", "name": "Regional Assets", "url": "data/regional_assets.csv", "idColumn": "asset_id" }
          ]
        },
        {
          "id": "energy-intelligence",
          "type": "group",
          "name": "Energy Intelligence",
          "members": [
            { "id": "energy-assets", "type": "csv", "name": "Energy Infrastructure", "url": "data/energy_assets.csv", "idColumn": "asset_id" }
          ]
        },
        {
          "id": "mining-intelligence",
          "type": "group",
          "name": "Mining Intelligence",
          "members": [
            { "id": "mining-assets", "type": "csv", "name": "Mining Infrastructure", "url": "data/mining_assets.csv", "idColumn": "asset_id" }
          ]
        },
        {
          "id": "ict-intelligence",
          "type": "group",
          "name": "ICT Infrastructure Intelligence",
          "members": [
            { "id": "ict-assets", "type": "csv", "name": "ICT Infrastructure", "url": "data/ict_assets.csv", "idColumn": "asset_id" }
          ]
        },
        {
          "id": "ai-recommendations",
          "type": "group",
          "name": "AI Recommendations",
          "members": [
            { "id": "ai-reco", "type": "csv", "name": "AI Infrastructure Insights", "url": "data/ai_recommendations.csv", "idColumn": "recommendation_id" }
          ]
        }
      ]
    }
  ],
  "viewerMode": "3dSmooth",
  "baseMaps": {
    "defaultBaseMapId": "basemap-openstreetmap",
    "previewBaseMapId": "basemap-natural-earth-II"
  }
}
```

---

## 7. Files to Modify - Complete List

### Core Configuration Files (4 files)

| # | File Path | Modification Type |
|---|-----------|------------------|
| 1 | `wwwroot/config.json` | Update `appName`, `brandBarElements`, `disclaimer` |
| 2 | `wwwroot/index.ejs` | Change `<title>` to "DigiTwin XR Platform" |
| 3 | `wwwroot/init/simple.json` | Rename to `init.json` and replace content |
| 4 | `package.json` | Update `name` to "dig twin-xr" |

### Data Files (10 files - CREATE NEW)

| # | File Path | Content |
|---|-----------|---------|
| 5 | `wwwroot/data/regional_assets.csv` | 8 regional infrastructure assets |
| 6 | `wwwroot/data/energy_assets.csv` | 5 energy infrastructure assets |
| 7 | `wwwroot/data/mining_assets.csv` | 5 mining infrastructure assets |
| 8 | `wwwroot/data/ict_assets.csv` | 5 ICT infrastructure assets |
| 9 | `wwwroot/data/ai_recommendations.csv` | 7 AI recommendations |
| 10 | `wwwroot/data/flood_risk.geojson` | 3 flood risk zones |
| 11 | `wwwroot/data/drought_risk.geojson` | 3 drought risk zones |
| 12 | `wwwroot/data/heat_stress.geojson` | 3 heat stress zones |
| 13 | `wwwroot/data/mining_assets_geo.geojson` | Mining assets as GeoJSON (bonus) |
| 14 | `wwwroot/data/energy_assets_geo.geojson` | Energy assets as GeoJSON (bonus) |

**Total: 4 modified + 10 new = 14 files**

---

## 8. Implementation Sequence

### Step 1: Create Data Directory
- Create `wwwroot/data/` directory

### Step 2: Generate CSV Files
1. `regional_assets.csv`
2. `energy_assets.csv`
3. `mining_assets.csv`
4. `ict_assets.csv`
5. `ai_recommendations.csv`

### Step 3: Generate GeoJSON Files
1. `flood_risk.geojson`
2. `drought_risk.geojson`
3. `heat_stress.geojson`

### Step 4: Update Catalog
1. Create/replace `wwwroot/init/init.json`

### Step 5: Update Configuration
1. Modify `wwwroot/config.json`
2. Modify `wwwroot/index.ejs`
3. Modify `package.json`

---

## 9. Validation Checklist

- [ ] All 30 assets have valid coordinates within defined bounds
- [ ] Health scores range 0-100
- [ ] Risk scores range 0.0-1.0
- [ ] Investment priorities range 1-10
- [ ] All CSV files parse correctly
- [ ] All GeoJSON files are valid GeoJSON
- [ ] Catalog structure is valid TerriaJS format
- [ ] No external API dependencies
- [ ] No WMS service dependencies
- [ ] No live data feeds

---

*Plan Version: 1.0 - TRL4 SBIF Prototype*