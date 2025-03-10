/*
 * Copyright (C) 2022 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.tonkeeper.devkit.navigation

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.padding
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController
import com.tonkeeper.devkit.ui.passcode.AuthNode
import com.tonkeeper.devkit.ui.wallet.WalletNode

@Composable
fun MainNavigation(paddingValues: PaddingValues = PaddingValues()) {
    val navController = rememberNavController()

    NavHost(navController = navController, startDestination = "wallet") {
        composable("auth") { AuthNode(modifier = Modifier.padding(paddingValues)) }
        composable("wallet") { WalletNode(modifier = Modifier.padding(paddingValues)) }
    }
}
Fix dependencies - adding new feature